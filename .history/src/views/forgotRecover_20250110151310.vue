<template>
  <card
    title="We'll send you a code to your email address
"
  >
  <template #body>
    <div class="flex justify-around items-center">
        <p>We can send a login code to: <b>{{ user.email }}</b></p>
        <div>
            <img :src="" alt="">
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
