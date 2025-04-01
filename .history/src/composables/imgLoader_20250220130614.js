import { nextTick } from "vue";
import loading_spinner from "../components/loading/loading_spinner.vue";
export default {
  mounted(el) {
    const imageSrc = el.getAttribute("src");

    if (!imageSrc) return;

    // Tạo spinner loading
    el.parentNode.replaceChild(loading_spinner, el); // Thay ảnh bằng spinner

    const img = new Image();
    img.src = imageSrc;

    img.onload = async () => {
      await nextTick(); // Đảm bảo Vue đã cập nhật DOM
      el.classList.add("fade-in"); // Hiệu ứng mượt mà khi hiển thị
      spinner.replaceWith(el);
    };

    img.onerror = () => {
      const errorImage = document.createElement("div");
      errorImage.textContent = "Lỗi ảnh ❌";
      errorImage.classList.add("error-image");
      spinner.replaceWith(errorImage);
    };
  },
};
