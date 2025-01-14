<template>
  <div>
    <card title="Change your password">
      <template #body>
        <p>Type a new password:</p>
        <div class="my-7 flex flex-col items-center justify-center gap-3">
          <passwordInput
            placeholderProp="New password"
            class="w-full"
            v-model="pass"
          ></passwordInput>
          <passwordInput
            placeholderProp="Confirm new password"
            class="w-full"
            v-model="retypePass"
          ></passwordInput>
        </div>
      </template>
      <template #footer
        ><baseButton class="bg-blue-500 text-white" push="/login">
          Back to login</baseButton
        >
      </template>
    </card>
    <baseFooter> </baseFooter>
  </div>
</template>

<script setup>
import passwordInput from "../components/login_signup/passwordInput.vue";
import card from "../components/card.vue";
import baseButton from "../components/base_button.vue";
import baseFooter from "../components/login_signup/footer.vue";
import { ref } from "vue";

const pass = ref("");
const retypePass = ref("");
</script>
