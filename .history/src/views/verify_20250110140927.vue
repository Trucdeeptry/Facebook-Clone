<template>
  <div>
    <card title="Verify your email">
      <template #body>
        <div class="main border-b-2 p-6 text-lg">
          <p>Please check your emails for a message with your verify url.</p>
          <p>
            We sent your code to: <b>{{ userInfo?.email }}</b>
          </p>
        </div>
      </template>
      <template #footer>
        <div class="content_footer p-6 flex justify-between items-center">
          <a href="#" class="text-md text-blue-500 hover:underline"
            >Didn't get a code?</a
          >
          <div class="button-group text-md flex items-center gap-3">
            <baseButton bg="bg-blue-500"></baseButton>
            
          </div>
        </div>
      </template>
    </card>
    <baseFooter></baseFooter>
  </div>
</template>

<script setup>
import baseButton from '../components/base_button.vue'
import card from "../components/card.vue";
import baseFooter from "../components/login_signup/footer.vue";
import { useRouter } from "vue-router";
import { onBeforeMount, ref } from "vue";
const router = useRouter();
const userInfo = ref("");
onBeforeMount(() => {
  userInfo.value = JSON.parse(localStorage.getItem("signUpInfo"));
  if (!userInfo.value) {
    router.push("/notFound");
  }
});
</script>
