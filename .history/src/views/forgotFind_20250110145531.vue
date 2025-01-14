<template>
  <card title="Find Your Account">
    <template #form>
        <form @submit.prevent="findUser(email)">
        
    </form>
    </template>
    
  </card>
  <baseFooter></baseFooter>
</template>

<script setup>
import loading_spinner from "../components/loading/loading_spinner.vue";
import baseButton from "../components/base_button.vue";
import baseFooter from "../components/login_signup/footer.vue";
import card from "../components/card.vue";
import { useStore } from "vuex";
import { ref, computed } from "vue";
const store = useStore();

const email = ref("");
async function findUser(email) {
  try {
    const info = await store.dispatch("auth/getInfo", email);
    localStorage.setItem("userInfo", JSON.stringify(info));
  } catch (error) {
    console.log("failed for get user in forgot-find", error);
  }
}

const isLoading = computed(() => store.state.isLoading);
</script>
