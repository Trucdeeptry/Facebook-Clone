<template>
  <div>
    <card title="Change your password">
      <template #body>
        <p class="mb-2">
          You are changing the password for <b>{{ email }}</b>
        </p>
        <p>Type a new password:</p>
        <div class="my-5 flex flex-col items-center justify-center gap-3">
          <passwordInput
            placeholderProp="New password"
            class="w-full"
            :inputClass="[isPassErr ? '!border-red-500' : '']"
            v-model="password"
            v-bind="passwordProps"
          ></passwordInput>
          <passwordInput
            placeholderProp="Confirm new password"
            class="w-full"
            :inputClass="[isPassErr ? '!border-red-500' : '']"
            v-model="confirmPass"
          ></passwordInput>
        </div>
        <p v-if="isPassErr" class="text-red-500 font-bold">
          Passwords do not match
        </p>
        {{ isPassErr }}
      </template>
      <template #footer>
        <div class="flex justify-end">
          <baseButton class="bg-blue-500 text-white" push="/login">
            Back to login</baseButton
          >
        </div>
      </template>
    </card>
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
const { defineField } = useForm({
  initialValues: values,
  validationSchema: yup.object({
    pass: yup.string().required("Please type your password"),
    confirmPass: yup.string().required("Confirm your password"),
  }),
});
const [password, passwordProps] = defineField("password");
const [confirmPassword, confirmPasswordProps] = defineField("password");

onMounted(() => {
  const decoded = jwtDecode(props.token);
  values.email = decoded.email;
});
</script>
