<template>
  <div>
    <card title="Change your password">
      <template #body>
        <p class="mb-2">
          You are changing the password for <b>{{ email }}</b>
        </p>
        <p>Type a new password:</p>
        <div class="my-7 flex flex-col items-center justify-center gap-3">
          <passwordInput
            placeholderProp="New password"
              class="w-full"
              :class="{'border-red-500': passErr}"
            v-model="pass"
          ></passwordInput>
          <passwordInput
            placeholderProp="Confirm new password"
            class="w-full"
            v-model="retypePass"
          ></passwordInput>
          <p v-if="passErr" class="text-red-500 font-bold">Passwords do not match</p>
        </div>
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
import { ref, onMounted, defineProps } from "vue";
// decalre variable
const props = defineProps(["token"]);
let email = ref("");
const pass = ref("");
const retypePass = ref("");
const passErr = ref(true)
// function change pass



onMounted(() => {
  const decoded = jwtDecode(props.token);
  email.value = decoded.email;
});
</script>
