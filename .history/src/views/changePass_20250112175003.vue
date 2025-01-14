<template>
  <div>
    <form @submit.prevent="onSubmit">
      <card title="Change your password">
        <template #body>
          <p class="mb-2">
            You are changing the password for <b>{{ values.email }}</b>
          </p>
          <p>Type a new password:</p>
          <div class="my-5 flex flex-col items-center justify-center gap-3">
            <passwordInput
              placeholderProp="New password"
              class="w-full"
              v-model="password"
              v-bind="passwordProps"
              :inputClass="[errors.password ? '!border-red-500' : '']"
            ></passwordInput>

            <passwordInput
              placeholderProp="Confirm new password"
              class="w-full"
              v-model="confirmPass"
              :inputClass="[errors.password ? '!border-red-500' : '']"
              v-bind="confirmPassProps"
            ></passwordInput>
          </div>
        </template>
        <template #footer>
          <div class="flex justify-end gap-4 items-center">
            <baseButton class="bg-gray-200 text-black" push="/login">
              Back to login</baseButton
            >
            <baseButton type="submit" class="bg-blue-500 text-white">
              Confirm</baseButton
            >
          </div>
        </template>
      </card>
    </form>
    <baseFooter> </baseFooter>
  </div>
</template>

<script setup>
import { jwtDecode } from "jwt-decode";
import passwordInput from "../components/login_signup/passwordInput.vue";
import card from "../components/card.vue";
import baseButton from "../components/base_button.vue";
import baseFooter from "../components/login_signup/footer.vue";
import { ref, onMounted, defineProps, reactive } from "vue";
import { useForm } from "vee-validate";
import * as yup from "yup";
// decalre variable
const props = defineProps(["token"]);
const values = reactive({
  email: "",
  password: "",
  confirmPass: "",
});
const { defineField, errors, handleSubmit } = useForm({
  initialValues: values,
  validationSchema: yup.object({
    password: yup
      .string()
      .required("Please type your password")
      .min(6, "Password must be at least 6 characters")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter"),
    confirmPass: yup
      .string()
      .required("Confirm your password")
      .oneOf([yup.ref("password")], "Passwords must match"),
  }),
});

const [password, passwordProps] = defineField("password");
const [confirmPass, confirmPassProps] = defineField("confirmPass");
const onSubmit = handleSubmit((values) => {
  console.log(values);
});

onMounted(() => {
  const decoded = jwtDecode(props.token);
  values.email = decoded.email;
});
</script>

<style scoped>
.before {
  z-index: 1;
  display: none;
  position: absolute;
  top: var(--before-top, 0);
  right: var(--before-right, auto);
  background-color: #be4b49;
  padding: 13px;
  border-radius: 2px;
  box-shadow: 0 0 0 1px rgba(139, 3, 0, 0.75), 0 1px 10px rgba(0, 0, 0, 0.35);
  color: white;
  width: max-content;
  max-width: 400px;
  font-size: 14px;
}
.before::after {
  content: "";
  position: absolute;
  top: var(--after-top, 30%);
  right: var(--after-right, -22px);
  transform: var(--transform, 0deg);
  border-width: 12px;
  border-style: solid;
  border-color: transparent transparent transparent #be4b49; /* Màu của mũi tên */
}
</style>
