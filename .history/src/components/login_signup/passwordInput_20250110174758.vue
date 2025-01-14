<template>
  <div class="relative">
    <input
      :type="isHidePassword ? 'password' : 'text'"
      class="pw-box"
      placeholder="Password"
      v-model="password"
    />
    <i
      @click="togglePasswordVisibility"
      :class="[isHidePassword ? 'fa fa-eye-slash' : 'fa fa-eye']"
      v-show="isShowEyes"
      id="toggleEyeIcon"
      class="absolute top-1/2 transform -translate-y-1/2 right-0 p-2 cursor-pointer"
    ></i>
  </div>
</template>

<script setup>
import { ref, wa } from "vue";

const props = defineProps({
  value: {
    type: String,
    required: true,
  },
  isShowEyes: {
    type: Boolean,
    default: true,
  },
});

const password = ref(props.value);
const isHidePassword = ref(true);

const togglePasswordVisibility = () => {
  isHidePassword.value = !isHidePassword.value;
};

// Watch for changes in password and emit them back to the parent component
watch(password, (newValue) => {
  emit("update:value", newValue);
});
</script>

<style scoped>
.pw-box {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
}

i {
  cursor: pointer;
  transition: color 0.3s;
}

i:hover {
  color: #007bff;
}
</style>
