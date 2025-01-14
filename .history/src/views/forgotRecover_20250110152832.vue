<template>
  <form @submit.prevent>
    <card
      title="We'll send you a code to your email address
      "
    >
      <template #body>
        <div class="flex justify-between">
          <p class="w-1/3">
            We can send a login code to: <b>{{ user.email }}</b>
          </p>
          <div class="flex flex-col items-center justify-center mr-">
            <img
              :src="user.avatar"
              alt="avt"
              class="object-cover rounded-full w-20 h-20"
            />
            <div class="text-center">
              <b>{{ user.info.firstName + " " + user.info.surName }}</b>
              <p class="text-sm text-gray-400">TSocial user</p>
              <a href="#" class="text-blue-300">Not you?</a>
            </div>
          </div>
        </div>
      </template>

      <template #footer>
        <div class="flex items-center justify-between">
          <a
            href="#"
            class="text-blue-500 hover:underline text-md"
            @click="$router.push('/login')"
            >Log in with password</a
          >
          <div class="flex gap-3">
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
