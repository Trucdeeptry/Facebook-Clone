<template>
  <card title="Verify status">
    <template #body>
        {{ message }}
    </template>
    <template #footer>
        
    </template>
  </card>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex/types/index.js";
import card from "../components/card.vue";
const router = useRouter();
const store = useStore();
async function callVerifyAction(email, token) {
  try {
    const actionMessage = await store.dispatch("auth/verifyAction", {
      email,
      token,
    });
    return actionMessage;
  } catch (error) {
    console.log(error);
  }
}
let message = ref('')
onBeforeMount(() => {
   const {email, token} = router.params
   message.value = callVerifyAction(email, token)
})
</script>
