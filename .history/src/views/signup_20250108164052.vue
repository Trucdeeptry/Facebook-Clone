<template>
  <section>
    <div class="bg-[#f0f2f5] pb-16">
      <div class="logo">
        <img
          class="w-80 m-auto"
          src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
          alt=""
        />
      </div>
      <form
        @submit.prevent="onSubmit"
        class="shadow-xl w-1/3 m-auto bg-white rounded"
        style="box-shadow: 0 1px 8px 5px #dddfe2"
      >
        <div class="border-b-[1px] border-gray text-center p-4">
          <h1 class="text-2xl font-bold">Create a new account</h1>
          <p class="opacity-60">It's quick and easy.</p>
        </div>
        <div class="p-4">
          <div class="flex items-center justify-between gap-3 mb-3">
            <div class="input_wrapper relative flex-grow">
              <input
                type="text"
                placeholder="First name"
                v-model="firstName"
                v-bind="firstNameProps"
                class="border p-2 rounded-md min-w-28 w-full"
                :class="{ 'border-red-500': errors.firstName }"
              />
              <i
                v-if="errors.firstName"
                class="fa-solid fa-circle-exclamation absolute right-2 top-3"
                style="color: #a04640"
              ></i>

              <div
                v-if="errors.firstName"
                class="before"
                :style="{
                  '--before-top': '-4px',
                  '--before-right': '110%',
                  '--tranform': ' translateY(-50%)',
                }"
              >
                {{ errors.firstName }}
              </div>
            </div>
            <div class="input_wrapper relative flex-grow">
              <input
                type="text"
                placeholder="Surname"
                v-model="surName"
                v-bind="surNameProps"
                class="border p-2 rounded-md min-w-28 w-full"
                :class="{ 'border-red-500': errors.surName }"
              />
              <i
                v-if="errors.surName"
                class="fa-solid fa-circle-exclamation absolute right-2 top-3"
                style="color: #a04640"
              ></i>
              <div
                v-if="errors.surName"
                class="before"
                :style="{
                  '--before-top': '130%',
                  '--before-right': '50%',
                  '--transform': 'rotate(-90deg)',
                  '--after-top': '-45%',
                  '--after-right': '44%',
                }"
              >
                {{ errors.surName }}
              </div>
            </div>
          </div>
          <p class="text-xs opacity-70 self-start">Date of birth</p>

          <div
            class="flex items-center justify-between gap-3 mb-3 mt-2 select_wrapper relative"
          >
            <select
              class="border rounded flex-grow h-9 px-2"
              name="day"
              v-model="day"
              :class="{ 'border-red-500': errors.year }"
            >
              <option v-for="number in 31" :key="number" :value="number">
                {{ number }}
              </option>
            </select>

            <select
              class="border rounded flex-grow h-9 px-2"
              name="month"
              v-model="month"
              :class="{ 'border-red-500': errors.year }"
            >
              <option
                v-for="(month, index) in months"
                :key="month"
                :value="index"
              >
                {{ month }}
              </option>
            </select>
            <select
              class="border rounded flex-grow h-9 px-2"
              name="year"
              v-model="year"
              v-bind="yearProps"
              :class="{ 'border-red-500': errors.year }"
            >
              <option
                v-for="number in getFilteredYears()"
                :value="number"
                :key="number"
                v-show="number > 1900"
              >
                {{ number }}
              </option>
            </select>
            <i
              v-if="errors.year"
              class="fa-solid fa-circle-exclamation absolute right-2 top-[-22px]"
              style="color: #a04640"
            ></i>
            <div
              v-if="errors.year"
              class="before"
              :style="{
                '--before-top': '-10px',
                '--before-right': '105%',
                '--tranform': ' translateY(-50%)',
              }"
            >
              {{ errors.year }}
            </div>
          </div>

          <p class="text-xs opacity-70 self-start">Gender</p>
          <div
            class="flex items-center justify-between gap-3 mb-3 mt-2 label_wrapper relative"
          >
            <label
              v-for="(option, index) in genderOptions"
              :key="option"
              :for="option"
              class="p-2 flex-grow border rounded flex justify-between items-center"
              :class="{ 'border-red-500': errors.gender }"
            >
              <span>{{ option }}</span>
              <input
                type="radio"
                name="gender"
                :value="index + 1"
                v-model="gender"
                v-bind="genderProps"
                :id="option"
              />
            </label>
            <i
              ref="error-icon"
              v-if="errors.gender"
              class="fa-solid fa-circle-exclamation absolute right-2 top-[-22px]"
              style="color: #a04640"
       
            ></i>
            <div
              ref="error-gender"
              v-if="errors.gender"
              class="before"
              :style="{
                '--before-top': '-10px',
                '--before-right': '105%',
                '--tranform': ' translateY(-50%)',
              }"
            >
              {{ errors.gender }}
            </div>
          </div>
          <div v-if="isCustom">
            <div
              class="flex items-center justify-between gap-3 mb-1 mt-2 select_wrapper relative"
            >
              <select
                name=""
                id=""
                class="border p-2 flex-grow rounded"
                :class="{ 'border-red-500': errors.custom }"
                v-model="custom"
                v-bind="customProps"
              >
                <option
                  :value="index"
                  :disabled="index == 0"
                  v-for="(option, index) in customOptions"
                  :key="option"
                >
                  {{ option }}
                </option>
              </select>
              <i
                v-if="errors.custom"
                class="fa-solid fa-circle-exclamation absolute right-5 top-3"
                style="color: #a04640"
              ></i>
              <div
                v-if="errors.custom"
                class="before"
                :style="{
                  '--before-top': '-10px',
                  '--before-right': '495px',
                  '--tranform': ' translateY(-50%)',
                }"
              >
                {{ errors.custom }}
              </div>
            </div>
            <p class="text-xs opacity-60">
              Your pronoun is visible to everyone.
            </p>
            <div class="flex items-center justify-between gap-3 mb-3 mt-2">
              <input
                type="text"
                class="border p-2 rounded flex-grow"
                placeholder="Gender (optional)"
                v-model="customOptional"
              />
            </div>
          </div>

          <div class="flex items-center justify-between gap-3 mb-3 mt-2">
            <div class="input_wrapper flex-grow relative">
              <input
                type="text"
                v-model="email"
                v-bind="emailProps"
                placeholder="Email address"
                class="border w-full rounded p-2 min-w-28"
                :class="{ 'border-red-500': errors.email }"
              />
              <i
                v-if="errors.email"
                class="fa-solid fa-circle-exclamation absolute right-2 top-3"
                style="color: #a04640"
              ></i>
              <div
                v-if="errors.email"
                class="before"
                :style="{
                  '--before-top': '-10px',
                  '--before-right': '104%',
                  '--tranform': ' translateY(-50%)',
                }"
              >
                {{ errors.email }}
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between gap-3 mb-3 mt-2">
            <div class="input_wrapper flex-grow relative">
              <input
                type="password"
                placeholder="New password"
                v-model="password"
                v-bind="passwordProps"
                class="border w-full rounded p-2 min-w-28"
                :class="{ 'border-red-500': errors.password }"
              />
              <i
                v-if="errors.password"
                class="fa-solid fa-circle-exclamation absolute right-2 top-3"
                style="color: #a04640"
              ></i>
              <div
                v-if="errors.password"
                class="before"
                :style="{
                  '--before-top': '-6px',
                  '--before-right': '104%',
                  '--tranform': ' translateY(-50%)',
                }"
              >
                {{ errors.password }}
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between gap-3 mb-3 mt-2">
            <p class="text-xs text-[#777]">
              People who use our service may have uploaded your contact
              information to Facebook.
              <a href="#" class="text-[#385898] underline">Learn more.</a>
            </p>
          </div>
          <div class="flex items-center justify-between gap-3 mb-3 mt-2">
            <p class="text-xs text-[#777]">
              By clicking Sign Up, you agree to our
              <a href="" class="text-[#385898] underline">Terms</a>,
              <a href="" class="text-[#385898] underline">Privacy Policy</a> and
              <a href="" class="text-[#385898] underline">Cookies Policy</a>.
              You may receive SMS notifications from us and can opt out at any
              time.
            </p>
          </div>
          <button
            type="submit"
            class="rounded text-white bg-[#00a400] block px-16 py-1 text-lg font-bold m-auto my-6 hover:bg-[rgb(0,160,0)]"
          >
            Sign up
          </button>
          <a
            @click="$router.push('/login')"
            class="text-lg text-[#1877f2] cursor-pointer block text-center mb-3 hover:underline"
            >Already have an account?</a
          >
        </div>
      </form>
    </div>
    <baseFooter></baseFooter>
  </section>
</template>

<script setup>
import { ref, computed, reactive } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import baseFooter from "../components/login_signup/footer.vue";
import { useForm } from "vee-validate";
import * as yup from "yup";

// declare tools
const store = useStore();
const route = useRoute();
// hanlde birthday
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
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
// hanlde gender
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
// hanlde validate
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
      .min(6, "Password must be at least 6 characters"),
  }),
});
const [password, passwordProps] = defineField("password");
const [email, emailProps] = defineField("email");
const [firstName, firstNameProps] = defineField("firstName");
const [surName, surNameProps] = defineField("surName");
const [gender, genderProps] = defineField("gender");
const [custom, customProps] = defineField("custom");
const [year, yearProps] = defineField("year");

const onSubmit = handleSubmit((values) => {
  if (values.gender == 3) {
    delete values.gender;
  } else {
    delete values.custom;
  }
  const singUpInfo = {
    
  }
  
  const isSignupSuccesss = store.dispatch("auth/signUpAction", values);
  if (isSignupSuccesss) {
    route.push("/login");
  }
});
// End validate
</script>

<style>
.label_wrapper select:focus ~ i {
  display: none;
}
.select_wrapper select:focus ~ i {
  display: none;
}
.input_wrapper input:focus ~ i {
  display: none;
}
.label_wrapper label input:focus ~ .before {
  display: block;
}

.select_wrapper select:focus ~ .before {
  display: block;
}
.input_wrapper input:focus ~ .before {
  display: block;
}
.before {
  z-index: 1;
  display: none;
  position: absolute;
  top: var(--before-top, 0);
  right: var(--before-right, auto);
  background-color: #be4b49;
  padding: 13px;
  border-radius: 2px;
  box-shadow: 0 0 0 1px rgba(139, 3, 0, 0.75), 0 1px 10px rgba(0, 0, 0, 0.35);
  color: white;
  width: max-content;
  max-width: 400px;
  font-size: 14px;
}
.before::after {
  content: "";
  position: absolute;
  top: var(--after-top, 30%);
  right: var(--after-right, -22px);
  transform: var(--transform, 0deg);
  border-width: 12px;
  border-style: solid;
  border-color: transparent transparent transparent #be4b49; /* Màu của mũi tên */
}
</style>
