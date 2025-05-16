<template>
  <card title="Verify status">
    <template #body>
      <div>
        <p v-if="error">{{ errorMessage }}</p>
        <p v-else>Something when wrong!</p>
      </div>
    </template>
    <template #footer>
      <div class="flex justify-center">
        <base_button class="bg-blue-500 text-white" push="/login">
          Back to login</base_button>
      </div>
    </template>
  </card>
</template>

<script setup>
import base_button from '../../components/base_button.vue'
import card from '../../components/login_signup/card.vue'
import { defineProps } from 'vue';


// Định nghĩa các props nhận từ route
const props = defineProps(['error', 'errorCode', 'errorDescription'
]);



// Tạo thông điệp lỗi tùy thuộc vào mã lỗi
let errorMessage = "";
if (props.error) {
  if (props.errorCode === "otp_expired") {
    errorMessage = "Liên kết xác thực đã hết hạn. Vui lòng yêu cầu một liên kết mới.";
  } else if (props.errorCode === "access_denied") {
    errorMessage = "Liên kết xác thực không hợp lệ hoặc đã được sử dụng.";
  } else {
    errorMessage = "Đã xảy ra lỗi khi xác thực. Vui lòng thử lại.";
  }
}

</script>
