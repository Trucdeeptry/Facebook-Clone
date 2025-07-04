<template>
  <div>
    <form @submit.prevent="onSubmit">
      <card title="Change your password">
        <template #body>
          <h1 v-if="message">{{ message }}</h1>
          <div v-else>

            <p class="mb-2">
              You are changing the password for <b>{{ email }}</b>
            </p>
            <p>Type a new password:</p>
            <div class="my-5 flex flex-col items-center justify-center gap-3">
              <div class="w-full relative">
                <passwordInput placeholderProp="New password" class="w-full" v-model="password" v-bind="passwordProps"
                  :inputClass="errors.password ? '!border-red-500' : ''"></passwordInput>
                <div v-if="errors.password" class="before !block text-red-500" :style="{
                  '--before-top': '-6px',
                  '--before-right': '104%',
                  '--tranform': ' translateY(-50%)',
                }">
                  {{ errors.password }}
                </div>
              </div>
              <div class="w-full relative">
                <passwordInput placeholderProp="Confirm new password" class="w-full" v-model="confirmPass"
                  :inputClass="errors.confirmPass ? '!border-red-500' : ''" v-bind="confirmPassProps"></passwordInput>
                <div v-if="errors.confirmPass" class="before !block text-red-500" :style="{
                  '--before-top': '-6px',
                  '--before-right': '104%',
                  '--tranform': ' translateY(-50%)',
                }">
                  {{ errors.confirmPass }}
                </div>
              </div>
            </div>
          </div>
        </template>
        <template #footer>
          <div class="flex justify-end gap-4 items-center">
            <baseButton class="bg-gray-200 text-black" push="/login">
              Back to login</baseButton>
            <baseButton v-if="!message" type="submit" class="bg-blue-500 text-white">
              <div>
                <loading_spinner v-if="isLoading"></loading_spinner>
                <span v-else>Confirm</span>
              </div>
            </baseButton>
          </div>
        </template>
      </card>
    </form>
    <baseFooter> </baseFooter>
  </div>
</template>

<script setup>
import { jwtDecode } from "jwt-decode";
import passwordInput from "../../components/login_signup/passwordInput.vue";
import card from "../../components/login_signup/card.vue";
import baseButton from "../../components/base_button.vue";
import baseFooter from "../../components/login_signup/footer.vue";
import { ref, onMounted, defineProps, reactive, computed } from "vue";
import { useForm } from "vee-validate";
import * as yup from "yup";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import loading_spinner from "../../components/loading/loading_spinner.vue";
// decalre variable
// Định nghĩa các props nhận từ route
const props = defineProps(['error', 'refreshToken', 'accessToken', 'errorCode', 'errorDescription', 'success'
]);
// Tạo thông điệp lỗi tùy thuộc vào mã lỗi
let message = "";



if (props.error) {
  if (props.errorCode === "otp_expired") {
    message = "Liên kết xác thực đã hết hạn. Vui lòng yêu cầu một liên kết mới.";
  } else if (props.errorCode === "access_denied") {
    message = "Liên kết xác thực không hợp lệ hoặc đã được sử dụng.";
  } else {
    message = "Đã xảy ra lỗi khi xác thực. Vui lòng thử lại.";
  }
}
const store = useStore();
const router = useRouter();
// validate
const values = reactive({
  email: "",
  password: "",
  confirmPass: "",
});
const { defineField, errors, handleSubmit, setFieldValue } = useForm({
  initialValues: values,
  validationSchema: yup.object({
    password: yup
      .string()
      .required("Please type your password")
      .min(6, "Password must be at least 6 characters")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter"),
    confirmPass: yup
      .string()
      .required("Confirm your password")
      .oneOf([yup.ref("password")], "Passwords must match"),
    email: yup.string(),
  }),
});

const [password, passwordProps] = defineField("password");
const [email] = defineField("email");
const [confirmPass, confirmPassProps] = defineField("confirmPass");
const onSubmit = handleSubmit((values) => {
  callChangePW(values.email, values.password);
});
// end validate
// send change password
async function callChangePW(email, newPassword) {
  try {
    const changePWAct = await store.dispatch("auth/changePassword", {
      email,
      newPassword,
      access_token: props.accessToken,
      refresh_token: props.refreshToken
    });

    if (changePWAct == true) {
      alert("Password changed successfully");
      localStorage.removeItem('forgotInfo')
      router.push("/login");
    } else {
      alert(changePWAct)
    }
  } catch (error) {
    console.log(error);
  }
}
const isLoading = computed(() => store.state.isLoading);

onMounted(() => {
  const decoded = jwtDecode(props.accessToken);
  setFieldValue("email", decoded.email);
});
</script>
