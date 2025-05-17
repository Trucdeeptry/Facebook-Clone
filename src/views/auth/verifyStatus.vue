<template>
  <card title="Verify status">
    <template #body>
      <div>
        <p v-if="message">{{ message }}</p>
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
const props = defineProps(['error', 'errorCode', 'errorDescription', 'success'
]);



// Tạo thông điệp lỗi tùy thuộc vào mã lỗi
let message = "";


if (props.success) {
  message = "Xác thực thành công, bạn hãy đăng nhập!"
}
if (props.error) {
  if (props.errorCode === "otp_expired") {
    message = "Liên kết xác thực đã hết hạn. Vui lòng yêu cầu một liên kết mới.";
  } else if (props.errorCode === "access_denied") {
    message = "Liên kết xác thực không hợp lệ hoặc đã được sử dụng.";
  } else {
    message = "Đã xảy ra lỗi khi xác thực. Vui lòng thử lại.";
  }
}

</script>
