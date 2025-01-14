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
              :inputClass="[errors.pass ? '!border-red-500' : '']"
              v-model="password"
              v-bind="passwordProps"
            ></passwordInput>
            <passwordInput
              placeholderProp="Confirm new password"
              class="w-full"
              :inputClass="[errors.confirmPass ? '!border-red-500' : '']"
              v-model="confirmPass"
              v-bind="confirmPassProps"
            ></passwordInput>
          </div>
          {{ errors.pass }}
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
  pass: "",
  confirmPass: "",
});
const { defineField, errors, handleSubmit } = useForm({
  initialValues: values,
  validationSchema: yup.object({
    pass: yup
      .string()
      .required("Please type your password")
      .min(6, "Password must be at least 6 characters")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter"),
    confirmPass: yup
      .string()
      .required("Confirm your password")
      .oneOf([yup.ref("pass")], "Passwords must match"),
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
