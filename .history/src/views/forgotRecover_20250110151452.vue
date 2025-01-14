<template>
  <card
    title="We'll send you a code to your email address
"
  >
  <template #body>
    <div class="flex justify-around items-center">
        <p>We can send a login code to: <b>{{ user.email }}</b></p>
        <div>
            <img :src="user.avatar" alt="avt" class="rounded-full w-36">
            <b>{{ user.lastName + " " + user.surName }}</b>
            <p class="text-sm text-gray-400">TSocial user</p>
            <a href="" class="">Not you?</a>
        </div>
    </div>
  </template>
  </card>
  <baseFooter></baseFooter>
</template>

<script setup>
import card from "../components/card.vue";
import baseFooter from "../components/login_signup/footer.vue";

const user = JSON.parse(localStorage.getItem('userInfo'))


</script>
