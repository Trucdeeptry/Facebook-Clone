<template>
  <form @submit.prevent="findUser(email)">
    <card title="Find Your Account">
      <template #body>
        <div>
          <p>
            Please enter your email address or mobile number to search for your
            account.
          </p>
          <input
            v-model="email"
            :input="console.log(1)"
            type="email"
            class="block my-3 w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <p v-if="isError" class="text-red-500">
          Your email is not exists. Please check again!
        </p>
      </template>

      <template #footer>
        <div class="flex justify-end gap-3 items-center">
          <baseButton class="bg-gray-200 text-black" push="/login"
            >Cancel</baseButton
          >
          <baseButton type="submit" class="bg-blue-500 text-white">
            <div>
              <loading_spinner v-if="isLoading"></loading_spinner>
              <p v-else>Search</p>
            </div>
          </baseButton>
        </div>
      </template>
    </card>
  </form>
  <baseFooter></baseFooter>
</template>

<script setup>
import loading_spinner from "../components/loading/loading_spinner.vue";
import baseButton from "../components/base_button.vue";
import baseFooter from "../components/login_signup/footer.vue";
import card from "../components/card.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ref, computed } from "vue";
const store = useStore();
const router = useRouter();
const email = ref("");
const isError = ref(false);
async function findUser(email) {
  try {
    const info = await store.dispatch("auth/getInfo", email);
    if (info) {
      sessionStorage.setItem("forgotInfo", JSON.stringify(info));
      router.push("/forgot-recover");
    } else {      
      isError.value = true;
    }
    
  } catch (error) {
    console.log("failed for get user in forgot-find", error);
  }
}

const isLoading = computed(() => store.state.isLoading);
</script>
