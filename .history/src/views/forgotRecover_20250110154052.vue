<template>
  <form @submit.prevent>
    
  </form>
  <baseFooter></baseFooter>
</template>

<script setup>
import baseButton from "../components/base_button.vue";
import card from "../components/card.vue";
import baseFooter from "../components/login_signup/footer.vue";

const user = JSON.parse(localStorage.getItem("forgotInfo"))[0];
</script>
