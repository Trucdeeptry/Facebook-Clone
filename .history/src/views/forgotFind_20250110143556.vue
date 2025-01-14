<template>
  <card title="Find Your Account">
    <template #body>
      <div>
        <p>
          Please enter your email address or mobile number to search for your
          account.
        </p>
        <input
          v-model="email"
          type="email"
          id="large-input"
          class="block my-3 w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </template>

    <template #footer>
      <div class="flex justify-end gap-3 items-center">
        <baseButton
          tailwind="bg-gray-200 text-black"
          push="/login"
          content="Cancel"
        ></baseButton>
        <baseButton tailwind="bg-blue-500 text-white" content="Search">
          <loading_spinner></loading_spinner
        ></baseButton>
      </div>
    </template>
  </card>
  <baseFooter></baseFooter>
</template>

<script setup>
import loading_spinner from "../components/loading/loading_spinner.vue";
import baseButton from "../components/base_button.vue";
import baseFooter from "../components/login_signup/footer.vue";
import card from "../components/card.vue";
import { useStore } from "vuex/types/index.js";
import { ref } from "vue";
const store = useStore();

const email = ref("");
async function findUser(email) {
    try {
        const info = await store.dispatch("auth/getInfo", email);
        localStorage.setItem('userInfo', )
    } catch (error) {
        console.log('failed for get user in forgot-find', error);
        
    }

}
</script>
