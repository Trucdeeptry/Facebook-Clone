import { createApp, nextTick } from "vue";
import LoadingSpinner from "../components/loading/loading_spinner.vue"; // Import component

export default {
  mounted(el) {
    const imageSrc = el.getAttribute("src");
    if (!imageSrc) return;

    const spinnerContainer = document.createElement("div");

    const spinnerApp = createApp(LoadingSpinner);
    spinnerApp.mount(spinnerContainer);

    el.parentNode.replaceChild(spinnerContainer, el);

    const img = new Image();
    img.src = imageSrc;

    img.onload = async () => {
      await nextTick(); 
      spinnerContainer.replaceWith(el);
      spinnerApp.unmount(); 
    };

    img.onerror = () => {
      const errorImage = document.createElement("div");
      errorImage.textContent = "Lỗi ảnh ❌";
      errorImage.classList.add("error-image");
      spinnerContainer.replaceWith(errorImage);
      spinnerApp.unmount(); 
    };
  },
};
