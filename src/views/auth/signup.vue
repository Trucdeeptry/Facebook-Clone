<template>
  <section class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <div class="container mx-auto px-4 py-8">
      <!-- Logo -->
      <div class="text-center mb-8">
        <img class="h-16 mx-auto" src="/img/home/demo-logo.png" alt="Social Logo" />
      </div>

      <!-- Signup Form -->
      <div class="max-w-2xl mx-auto">
        <form @submit.prevent="onSubmit" class="bg-white rounded-2xl shadow-xl border border-gray-100 ">
          <!-- Header -->
          <div class="px-8 py-6 border-b border-gray-200 text-center">
            <h1 class="text-2xl font-bold text-gray-900 mb-2">
              Create a new account
            </h1>
            <p class="text-gray-600">
              It's quick and easy.
            </p>
          </div>

          <!-- Form Content -->
          <div class="px-8 py-6 space-y-6">
            <!-- Name Fields -->
            <div class="grid grid-cols-2 gap-3">
              <div class="relative group">
                <input type="text" placeholder="First name" v-model="firstName" v-bind="firstNameProps"
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  :class="{ 'border-red-500 focus:ring-red-500 focus:border-red-500': errors.firstName }" />
                <div v-if="errors.firstName" class="error-indicator">
                  <svg class="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div v-if="errors.firstName" class="side-error-tooltip">
                  {{ errors.firstName }}
                </div>
              </div>

              <div class="relative group">
                <input type="text" placeholder="Surname" v-model="surName" v-bind="surNameProps"
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  :class="{ 'border-red-500 focus:ring-red-500 focus:border-red-500': errors.surName }" />
                <div v-if="errors.surName" class="error-indicator">
                  <svg class="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div v-if="errors.surName" class="side-error-tooltip">
                  {{ errors.surName }}
                </div>
              </div>
            </div>

            <!-- Date of Birth -->
            <div class="space-y-3">
              <label class="block text-sm font-medium text-gray-700">
                Date of birth
              </label>
              <div class="grid grid-cols-3 gap-3 relative group">
                <select v-model="day"
                  class="px-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  :class="{ 'border-red-500 focus:ring-red-500 focus:border-red-500': errors.year }">
                  <option v-for="number in 31" :key="number" :value="number">
                    {{ number }}
                  </option>
                </select>

                <select v-model="month"
                  class="px-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  :class="{ 'border-red-500 focus:ring-red-500 focus:border-red-500': errors.year }">
                  <option v-for="(month, index) in months" :key="month" :value="index">
                    {{ month }}
                  </option>
                </select>

                <select v-model="year" v-bind="yearProps"
                  class="px-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  :class="{ 'border-red-500 focus:ring-red-500 focus:border-red-500': errors.year }">
                  <option v-for="number in getFilteredYears()" :value="number" :key="number" v-show="number > 1900">
                    {{ number }}
                  </option>
                </select>

                <div v-if="errors.year" class="error-indicator right-[-30px] top-1/2 transform -translate-y-1/2">
                  <svg class="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div v-if="errors.year" class="side-error-tooltip right-[-320px] top-1/2 transform -translate-y-1/2">
                  {{ errors.year }}
                </div>
              </div>
            </div>

            <!-- Gender -->
            <div class="space-y-3">
              <label class="block text-sm font-medium text-gray-700">
                Gender
              </label>
              <div class="grid grid-cols-3 gap-3 relative group">
                <label v-for="(option, index) in genderOptions" :key="option" :for="option"
                  class="flex items-center justify-between p-3 border border-gray-300 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                  :class="{ 'border-red-500': errors.gender }">
                  <span class="text-sm text-gray-700">{{ option }}</span>
                  <input type="radio" name="gender" :value="index + 1" v-model="gender" v-bind="genderProps"
                    :id="option" class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                </label>

                <div v-if="errors.gender" class="error-indicator right-[-30px] top-1/2 transform -translate-y-1/2">
                  <svg class="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div v-if="errors.gender" class="side-error-tooltip right-[-320px] top-1/2 transform -translate-y-1/2">
                  {{ errors.gender }}
                </div>
              </div>
            </div>

            <!-- Custom Gender Options -->
            <div v-if="isCustom" class="space-y-3">
              <div class="relative group">
                <select v-model="custom" v-bind="customProps"
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  :class="{ 'border-red-500 focus:ring-red-500 focus:border-red-500': errors.custom }">
                  <option :value="index" :disabled="index == 0" v-for="(option, index) in customOptions" :key="option">
                    {{ option }}
                  </option>
                </select>
                <div v-if="errors.custom" class="error-indicator">
                  <svg class="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div v-if="errors.custom" class="side-error-tooltip">
                  {{ errors.custom }}
                </div>
              </div>

              <p class="text-xs text-gray-600">
                Your pronoun is visible to everyone.
              </p>

              <input type="text" v-model="customOptional" placeholder="Gender (optional)"
                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200" />
            </div>

            <!-- Email -->
            <div class="relative group">
              <input type="text" v-model="email" v-bind="emailProps" placeholder="Email address"
                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                :class="{ 'border-red-500 focus:ring-red-500 focus:border-red-500': errors.email }" />
              <div v-if="errors.email" class="error-indicator">
                <svg class="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clip-rule="evenodd"></path>
                </svg>
              </div>
              <div v-if="errors.email" class="side-error-tooltip">
                {{ errors.email }}
              </div>
            </div>

            <!-- Password -->
            <div class="relative group">
              <input type="password" placeholder="New password" v-model="password" v-bind="passwordProps"
                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                :class="{ 'border-red-500 focus:ring-red-500 focus:border-red-500': errors.password }" />
              <div v-if="errors.password" class="error-indicator">
                <svg class="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clip-rule="evenodd"></path>
                </svg>
              </div>
              <div v-if="errors.password" class="side-error-tooltip">
                {{ errors.password }}
              </div>
            </div>

            <!-- Terms and Privacy -->
            <div class="space-y-4 text-xs text-gray-600">
              <p>
                People who use our service may have uploaded your contact
                information to Social.
                <a href="#" class="text-blue-600 hover:underline">Learn more.</a>
              </p>

              <p>
                By clicking Sign Up, you agree to our
                <a href="#" class="text-blue-600 hover:underline">Terms</a>,
                <a href="#" class="text-blue-600 hover:underline">Privacy Policy</a> and
                <a href="#" class="text-blue-600 hover:underline">Cookies Policy</a>.
                You may receive SMS notifications from us and can opt out at any
                time.
              </p>
            </div>

            <!-- Submit Button -->
            <button type="submit" :disabled="isLoading"
              class="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center">
              <loading_spinner v-if="isLoading" class="w-5 h-5"></loading_spinner>
              <span v-else>Sign Up</span>
            </button>

            <!-- Login Link -->
            <div class="text-center">
              <a @click="$router.push('/login')"
                class="text-blue-600 hover:text-blue-800 hover:underline cursor-pointer font-medium">
                Already have an account?
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>

    <!-- Footer -->
    <baseFooter></baseFooter>
  </section>
</template>

<script setup>
import { ref, computed, reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import baseFooter from "../../components/login_signup/footer.vue";
import { useForm } from "vee-validate";
import * as yup from "yup";
import loading_spinner from "../../components/loading/loading_spinner.vue";

// declare tools
const store = useStore();
const route = useRouter();

// handle birthday
function getFilteredYears() {
  const currentYear = new Date().getFullYear();
  return Array.from(
    { length: currentYear - 1900 + 1 },
    (_, index) => 1900 + index
  ).filter((number) => number > 1900);
}

const date = new Date();
const day = ref(date.getDate());
const month = ref(date.getMonth());
const months = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

// handle gender
const genderOptions = ["Female", "Male", "Custom"];
const customOptions = [
  "Select your pronoun",
  'She: "Wish her a happy birthday!',
  'He: "Wish him a happy birthday!',
  'They: "Wish them a happy birthday!',
];
const customOptional = ref("");
const isCustom = computed(() => {
  if (gender.value == 3) {
    return true;
  }
  return false;
});

const values = reactive({
  firstName: "",
  surName: "",
  gender: null,
  custom: 0,
  year: new Date().getFullYear(),
  email: "",
  password: "",
});

// handle validate
const { handleSubmit, errors, defineField } = useForm({
  initialValues: values,
  validationSchema: yup.object({
    firstName: yup.string().required("What's your name?"),
    surName: yup.string().required("What's your name?"),
    gender: yup
      .number()
      .required(
        "Please choose a gender. You can change who can see this later."
      ),
    custom: yup
      .number()
      .when("gender", {
        is: (gender) => gender == 3,
        then: () =>
          yup
            .number()
            .required("Please select your pronoun")
            .test(
              "not-zero",
              "Please select your pronoun",
              (value) => value !== 0
            )
            .transform((value, originalValue, context) => {
              if (
                context.parent &&
                (context.parent.gender === 1 || context.parent.gender === 2)
              ) {
                return 1;
              }
              return value;
            }),
        otherwise: () => yup.number().notRequired(),
      })
      .required(),
    year: yup
      .number()
      .default(2020)
      .required(
        "It looks like you've entered the wrong info. Please make sure that you use your real date of birth."
      )
      .test(
        "age-check",
        "It looks like you've entered the wrong info. Please make sure that you use your real date of birth.",
        (value) => {
          if (!value) return false;
          const currentYear = new Date().getFullYear();
          const birthYear = parseInt(value);
          const age = currentYear - birthYear;

          return age > 10;
        }
      ),
    email: yup
      .string()
      .email("Email invalid")
      .required(
        "You'll use this when you log in and if you ever need to reset your password."
      ),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter"),
  }),
});

const [password, passwordProps] = defineField("password");
const [email, emailProps] = defineField("email");
const [firstName, firstNameProps] = defineField("firstName");
const [surName, surNameProps] = defineField("surName");
const [gender, genderProps] = defineField("gender");
const [custom, customProps] = defineField("custom");
const [year, yearProps] = defineField("year");

// handle loading
const isLoading = ref(false);
const onSubmit = handleSubmit(async (values) => {
  if (values.gender == 3) {
    delete values.gender;
  } else {
    delete values.custom;
  }
  const signUpInfo = {
    email: values.email,
    password: values.password,
    info: {
      firstname: values.firstName,
      surname: values.surName,
      gender: values.gender,
      birthday: `${values.year}-${month.value}-${day.value}`,
    },
  };
  isLoading.value = true;
  await store.dispatch('auth/signUpAction', signUpInfo);
  isLoading.value = false;
});
</script>

<style scoped>
.error-indicator {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
}

.side-error-tooltip {
  position: absolute;
  left: calc(100% + 15px);
  top: 50%;
  transform: translateY(-50%);
  background-color: #be4b49;
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 13px;
  max-width: 300px;
  z-index: 10;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  white-space: normal;
  display: none;
}

.side-error-tooltip::before {
  content: '';
  position: absolute;
  top: 50%;
  left: -10px;
  transform: translateY(-50%);
  border-width: 5px;
  border-style: solid;
  border-color: transparent #be4b49 transparent transparent;
}

/* Show error tooltip on focus or hover */
.group:hover .side-error-tooltip,
.group:focus-within .side-error-tooltip {
  display: block;
}

/* Hide error indicator when input is focused */
.group:focus-within .error-indicator {
  display: none;
}
</style>