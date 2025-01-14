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
            <div class="w-full">
              <passwordInput
                placeholderProp="New password"
                class="w-full"
                v-model="password"
                v-bind="passwordProps"
                :inputClass="[errors.password ? '!border-red-500' : '']"
              ></passwordInput>
              {{ errors.password ? "!border-red-500" : "" }}
              <!-- <div
                v-if="errors.password"
                class="before"
                :style="{
                  '--before-top': '-6px',
                  '--before-right': '104%',
                  '--tranform': ' translateY(-50%)',
                }"
              >
                {{ errors.password }}
              </div> -->
            </div>
            <div class="w-full">
              <passwordInput
                placeholderProp="Confirm new password"
                class="w-full"
                v-model="confirmPass"
                :inputClass="[errors.confirmPass ? '!border-red-500' : '']"
                v-bind="confirmPassProps"
              ></passwordInput>
              <!-- <div
                
                class="before"
                :style="{
                  '--before-top': '-6px',
                  '--before-right': '104%',
                  '--tranform': ' translateY(-50%)',
                }"
              >
                {{ errors.confirmPass }}
              </div> -->
            </div>
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
