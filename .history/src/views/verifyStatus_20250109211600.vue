<template>
  <card title="Verify status">
    <template #body>
        {{ message }}
    </template>
    <template #footer>
        <button
              type="button"
              class="p-2 hover:opacity-80 px-5 font-bold rounded-lg bg-blue-300"
              @click="$router.push('/login')"
            >
              Back to login
            </button>
    </template>
  </card>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import card from "../components/card.vue";
const router = useRouter();
const store = useStore();
async function callVerifyAction(email, token) {
  try {
    const verifyAction = await store.dispatch("auth/verifyAction", {
      email,
      token,
    });
    if(verifyAction.status == 'success'){
        await store.dispatch('')
    }
    return verifyAction.message;
  } catch (error) {
    console.log(error);
  }
}
let message = ref('')
onBeforeMount(async () => {
   const {email, token} = router.params
   message.value = await callVerifyAction(email, token)
})
</script>
