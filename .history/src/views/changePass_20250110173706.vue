<template>
  <div>
    <card title="Change your password">
      <template #body>
        <b>Type a new password:</b>
        <div>
          <input
            v-model="pass"
            type="email"
            class="block my-3 w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            v-model="retypePass"
            type="email"
            class="block my-3 w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </template>
    </card>
    <baseFooter></baseFooter>
  </div>
</template>

<script setup>
import card from "../components/card.vue";
import baseFooter from "../components/login_signup/footer.vue";
import {ref} from 'vue'

const pass = ref('')
const retypePass = ref('')

</script>
