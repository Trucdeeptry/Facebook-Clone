<template>
  <loadingPage v-if="isLoginLoading"></loadingPage>
  <div v-else class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <div class="container mx-auto px-4 py-8">
      <!-- Main Content -->
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-start">
          <!-- Left Section - Recent Logins -->
          <div class="space-y-8">
            <!-- Logo -->
            <div class="flex items-center">
              <img class="h-12 w-auto object-contain" src="/img/home/demo-logo.png" alt="Logo" />
            </div>

            <!-- Title and Description -->
            <div class="space-y-4">
              <h1 class="text-4xl font-bold text-gray-900">
                Recent logins
              </h1>
              <p class="text-lg text-gray-600">
                Click your picture or add an account
              </p>
            </div>

            <!-- Recent Users Grid -->
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              <!-- Recent User Cards -->
              <div v-for="user in recentUsers" :key="user.email" @click="isOpenUserForm = true; userSelected = user;"
                class="group relative bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100">
                <!-- Remove Button -->
                <button @click.stop="removeAccount(user.email)"
                  class="absolute top-2 right-2 z-10 w-6 h-6 bg-gray-800/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-500">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"></path>
                  </svg>
                </button>

                <!-- User Avatar -->
                <div class="aspect-square">
                  <img :src="user.avatar" :alt="user.surname" class="w-full h-full object-cover" />
                </div>

                <!-- User Name -->
                <div class="p-3 bg-white">
                  <p class="text-blue-600 font-medium text-center truncate">
                    {{ user.surname }}
                  </p>
                </div>
              </div>

              <!-- Add Account Card -->
              <div @click="isOpenForm = true"
                class="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100 group">
                <!-- Plus Icon -->
                <div
                  class="aspect-square flex items-center justify-center bg-gray-50 group-hover:bg-gray-100 transition-colors duration-200">
                  <div
                    class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                  </div>
                </div>

                <!-- Add Account Text -->
                <div class="p-3 bg-white">
                  <p class="text-blue-600 font-medium text-center">
                    Add Account
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Section - Login Form -->
          <div class="flex justify-center lg:justify-end">
            <div class="w-full max-w-md">
              <loginForm :isShowRemember="true" :isShowSignup="true"></loginForm>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <baseFooter></baseFooter>

    <!-- Add Login Modal -->
    <Transition name="fade">
      <div v-if="isOpenForm" @click="isOpenForm = false"
        class="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <div @click.stop class="w-full max-w-md">
          <loginForm :isShowRemember="true" class="relative">
            <template #default>
              <div class="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 class="text-xl font-semibold text-gray-900">
                  Log in to Social
                </h2>
                <button @click="isOpenForm = false"
                  class="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200">
                  <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"></path>
                  </svg>
                </button>
              </div>
            </template>
          </loginForm>
        </div>
      </div>
    </Transition>

    <!-- Recent User Login Modal -->
    <Transition name="fade">
      <div v-if="isOpenUserForm" @click="isOpenUserForm = false"
        class="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <div @click.stop class="w-full max-w-md">
          <loginForm :EmailInputText="userSelected.email" :isShowRemember="true" class="relative">
            <template #avatar>
              <!-- Close Button -->
              <button @click="isOpenUserForm = false" type="button"
                class="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200 z-10">
                <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
                </svg>
              </button>

              <!-- User Avatar and Name -->
              <div class="text-center py-6">
                <div class="relative inline-block">
                  <img :src="userSelected.avatar"
                    class="w-24 h-24 rounded-full object-cover mx-auto border-4 border-white shadow-lg"
                    :alt="userSelected.firstname + ' ' + userSelected.surname" />
                </div>
                <h3 class="mt-4 text-lg font-semibold text-gray-900">
                  {{ userSelected.firstname + " " + userSelected.surname }}
                </h3>
              </div>
            </template>
          </loginForm>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import baseFooter from "../../components/login_signup/footer.vue";
import loginForm from "../../components/login_signup/loginForm.vue";
import loadingPage from "../loadingPage.vue";

// declare tools
const isLoginLoading = ref(true);
const store = useStore();
const router = useRouter();

// handle form add login
const isOpenForm = ref(false);

// handle form recent login
const isOpenUserForm = ref(false);
const userSelected = ref({});

// handle get recent login
let emailUsers = ref(JSON.parse(localStorage.getItem("recentUsers")));
let recentUsers = ref([]);

// get recent users
async function getUserInfo(emails) {
  recentUsers.value = await store.dispatch("auth/getInfo", emails);
}

// if emailUsers change, change display recent logins user list
watch(emailUsers, () => {
  getUserInfo(emailUsers.value);
});

// handle remove login
function removeAccount(emailRemove) {
  emailUsers.value = emailUsers.value.filter((email) => email != emailRemove);
  localStorage.setItem("recentUsers", JSON.stringify(emailUsers.value));
}

onMounted(async () => {
  getUserInfo(emailUsers.value);
  isLoginLoading.value = false;
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>