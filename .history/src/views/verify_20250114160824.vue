<template>
  <div>
    <card title="Verify your email">
      <template #body>
        <div class="main text-lg">
          <p>Please check your emails for a message with your verify url.</p>
          <p>
            We sent your code to: <b>{{ userInfo?.email }}</b>
          </p>
        </div>
      </template>
      <template #footer>
        <div class="content_footer flex justify-between items-center">
          <a href="#" class="text-md text-blue-500 hover:underline"
            >Send again</a
          >
          <div class="button-group text-md flex items-center gap-3">
            <baseButton class="bg-blue-500 text-white" push="/login">
              Back to login</baseButton
            >
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
import { ref, onMounted } from "vue";
const userInfo = ref("");
const isCanSend = ref(true)
const time = ref(0)
function setTime(number){
  time.value = number
  const timeId = setInterval(() => {
    if(time.value > 0){
      time.value--
    }else{
      clearInterval(time)
    }
  }, 1000);
}
onMounted(() => {
  userInfo.value = JSON.parse(localStorage.getItem("signUpInfo"));
});
</script>
