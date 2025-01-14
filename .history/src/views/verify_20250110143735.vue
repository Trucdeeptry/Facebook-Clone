<template>
  <div>
    <card title="Verify your email">
      <template #body>
        <div class="main border-b-2  text-lg">
          <p>Please check your emails for a message with your verify url.</p>
          <p>
            We sent your code to: <b>{{ userInfo?.email }}</b>
          </p>
        </div>
      </template>
      <template #footer>
        <div class="content_footer flex justify-between items-center">
          <a href="#" class="text-md text-blue-500 hover:underline"
            >Didn't get a code?</a
          >
          <div class="button-group text-md flex items-center gap-3">
            <baseButton
              tailwind="bg-blue-500 text-white"
              push="/login"
            ></baseButton>
          </div>
        </div>
      </template>
    </card>
    <baseFooter></baseFooter>
  </div>
</template>

<script setup>
import baseButton from "../components/base_button.vue";
import card from "../components/card.vue";
import baseFooter from "../components/login_signup/footer.vue";
import { ref } from "vue";
const userInfo = ref("");
</script>
