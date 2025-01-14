<template>
  <card></card>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex/types/index.js";
import card from "../components/card.vue";
const router = useRouter()
const store = useStore()
async function callVerifyAction(email, token) {
    try {
        const action = await store.dispatch('auth/verifyAction', {
            email,
            token
        })
    } catch (error) {
        
    }
}
</script>
