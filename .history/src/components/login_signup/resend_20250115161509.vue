<template>
  <a
    href="#"
    @click="handleSend(second)"
    class="text-md text-blue-500 hover:underline"
    :class="{
      'text-gray-400 cursor-default hover:no-underline': time != 0,
    }"
    >Resend email {{ time == 0 ? "" : `(${time})` }}</a
  >
</template>
