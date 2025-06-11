<template>
  <div class="bg-white rounded-2xl shadow-xl border border-gray-100 w-full max-w-md mx-auto overflow-hidden">
    <!-- Header Section with Slot -->
    <div class="px-8 pt-8 pb-2">
      <slot></slot>
    </div>

    <form @submit.prevent="login" class="px-8 pb-8">
      <!-- Email Input -->
      <div class="mb-4" v-show="!EmailInputText">
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Email or Phone
        </label>
        <input v-model="user.email" type="text" placeholder="Enter your email or phone number"
          class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-gray-900 placeholder-gray-500" />
      </div>

      <!-- Avatar Slot -->
      <div class="mb-4">
        <slot name="avatar"></slot>
      </div>

      <!-- Password Input -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Password
        </label>
        <password-input v-model="user.password" class="w-full"></password-input>
      </div>

      <!-- Remember Password Checkbox -->
      <div class="flex items-center mb-6" v-if="isShowRemember">
        <input type="checkbox" :id="uniqueId" v-model="isSave"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" />
        <label :for="uniqueId" class="ml-3 text-sm text-gray-700 cursor-pointer select-none">
          Remember password
        </label>
      </div>

      <!-- Login Button -->
      <button ref="autoClickBtn" type="submit" :disabled="isLoading"
        class="w-full cursor-pointer   bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 mb-4">
        <loading-spinner v-if="isLoading" class="w-5 h-5"></loading-spinner>
        <span v-else>Log In</span>
      </button>

      <!-- Forgot Password Link -->
      <div class="text-center mb-6">
        <router-link to="/forgot-find"
          class="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200">
          Forgotten password?</router-link>
      </div>

      <!-- Divider and Create Account Button -->
      <div v-if="isShowSignup">
        <div class="relative mb-6">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-4 bg-white text-gray-500">or</span>
          </div>
        </div>

        <button type="button" @click="$router.push('/signup')"
          class="w-full cursor-pointer bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200">
          Create New Account
        </button>
      </div>
      <div class="mt-3">

        <a href="#"><b> This is a student project for learning purposes only. Do NOT
            enter real credentials.
          </b></a>
      </div>
    </form>

  </div>
</template>

<script setup>
import passwordInput from "./passwordInput.vue";
import { ref, computed, reactive, defineProps, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const props = defineProps(["isShowRemember", "EmailInputText", "isShowSignup"]);

// declare tools
const store = useStore();
const router = useRouter();

// declare user
const user = reactive({
  // default email and password for testing
  email: "phantruc438@gmail.com",
  password: "9942994Ngoc",
});

// handle when users login with recent login
const EmailInputTextValue = computed(() => props.EmailInputText);

// handle login
const isSave = ref(true);
function login() {
  const loginInfo = {
    email: user.email,
    password: user.password,
    isSave: isSave.value,
  };

  store.dispatch(
    "auth/LoginAuthentication",
    loginInfo
  );
}

// handle when users login with recent login
if (EmailInputTextValue.value) {
  user.email = EmailInputTextValue.value;
}

// handle loading
const isLoading = computed(() => store.state.isLoading);

// handle id when use this form many times in 1 view
const uniqueId = Math.random().toString(36).substr(2, 9);
const autoClickBtn = ref(null);

// onMounted(() => {
//   autoClickBtn.value?.click();
// });
</script>