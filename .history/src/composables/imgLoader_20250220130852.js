import { createApp, nextTick } from "vue";
import LoadingSpinner from "../components/loading/loading_spinner.vue"; // Import component

export default {
  mounted(el) {
    const imageSrc = el.getAttribute("src");
    if (!imageSrc) return;

    // Tạo một div chứa component loading spinner
    const spinnerContainer = document.createElement("div");
    
    // Mount component Vue vào div
    const spinnerApp = createApp(LoadingSpinner);
    const spinnerInstance = spinnerApp.mount(spinnerContainer);
    
    // Thay thế ảnh bằng spinner
    el.parentNode.replaceChild(spinnerContainer, el);

    const img = new Image();
    img.src = imageSrc;

    img.onload = async () => {
      await nextTick(); // Đảm bảo Vue cập nhật DOM trước khi thay đổi
      spinnerContainer.replaceWith(el);
      spinnerApp.unmount(); // Hủy component để tránh rò rỉ bộ nhớ
    };

    img.onerror = () => {
      const errorImage = document.createElement("div");
      errorImage.textContent = "Lỗi ảnh ❌";
      errorImage.classList.add("error-image");
      spinnerContainer.replaceWith(errorImage);
      spinnerApp.unmount(); // Hủy component khi không cần thiết
    };
  },
};
