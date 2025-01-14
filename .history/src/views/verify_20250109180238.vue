<template>
  <div>
    <div class="header bg-white shadow-lg w-full p-4">
      <img
        class="w-28"
        src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
        alt=""
      />
    </div>
    <div class="content bg-[#e9ebee] py-16">
      <div class="card shadow-md rounded-lg bg-white m-auto w-[33rem]">
        <h1 class="p-6 border-b-2 text-xl font-bold">Verify your email</h1>
        <div class="main border-b-2 p-6 text-lg">
          <p>Please check your emails for a message with your verify url.</p>
          <p>We sent your code to: <b>{{ userEmail }}</b></p>
        </div>
        <div class="content_footer p-6 flex justify-between items-center">
            <a href="#" class="text-md text-blue-500 hover:underline">Didn't get a code?</a>
            <div class="button-group text-lg">
                <button type="button" class="p-2">Cancel</button>
                <button type="button" class="p-2">I verified</button>   
            </div>
        </div>
      </div>
    </div>
    <baseFooter></baseFooter>
  </div>
</template>

<script setup>
import baseFooter from "../components/login_signup/footer.vue";
import { useRoute } from "vue-router";
const route = useRoute();
const userEmail = route.params.email;
</script>
