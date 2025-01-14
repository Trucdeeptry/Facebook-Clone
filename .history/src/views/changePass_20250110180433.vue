<template>
  <div>
    <card title="Change your password">
      <template #body>
        <b>Type a new password:</b>
        <div class="my-3 flex flex-col items-center justify-center gap-3">
          <passwordInput placeholderProp="New password" class="w-full" v-model="pass"></passwordInput>
          <passwordInput placeholderProp="Confirm new password" class="w-full" v-model="retypePasss"></passwordInput>
        </div>
      </template>
      <template #footer> </template>
    </card>
    <baseFooter></baseFooter>
  </div>
</template>

<script setup>
import passwordInput from "../components/login_signup/passwordInput.vue";
import card from "../components/card.vue";
import base_button from "../components/base_button.vue";
import baseFooter from "../components/login_signup/footer.vue";
import { ref } from "vue";

const pass = ref("");
const retypePass = ref("");
</script>
