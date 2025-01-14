import axios from 'axios';
import { ref } from 'vue';

export const isLoading = ref(false);

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000', 
});

// Interceptor request: Bắt đầu tải
axiosInstance.interceptors.request.use((config) => {
  isLoading.value = true;
  return config;
}, (error) => {
  isLoading.value = false;
  return Promise.reject(error);
});

// Interceptor response: Kết thúc tải
axiosInstance.interceptors.response.use((response) => {
  isLoading.value = false;
  return response;
}, (error) => {
  isLoading.value = false;
  return Promise.reject(error);
});

export default axiosInstance;
