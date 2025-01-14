<template>
  <form @submit.prevent>
    <card
      title="We'll send you a code to your email address
      "
    >
      <template #body>
        <div class="flex justify-around items-center">
          <p>
            We can send a login code to: <b>{{ user.email }}</b>
          </p>
          <div>
            <img :src="user.avatar" alt="avt" class="rounded-full w-36" />
            <b>{{ user.lastName + " " + user.surName }}</b>
            <p class="text-sm text-gray-400">TSocial user</p>
            <a href="#" class="text-blue-300">Not you?</a>
          </div>
        </div>
      </template>

      <template #footer>
        <div class="flex items-center justify-around">
          <a href="#" class="text-blue-500 hover:underline text-md" @click="$router.push('/login')">Log in with password</a>
          <div>
            <baseButton tailwind="bg-gray-200"> Try another way </baseButton>
            <baseButton type="submit" tailwind="text-white bg-blue-500"
              >Continue
            </baseButton>
          </div>
        </div>
      </template>
    </card>
  </form>
  <baseFooter></baseFooter>
</template>

<script setup>
import baseButton from "../components/base_button.vue";
import card from "../components/card.vue";
import baseFooter from "../components/login_signup/footer.vue";

const user = JSON.parse(localStorage.getItem("userInfo"))[0];
</script>
