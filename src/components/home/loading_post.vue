<template>
  <div class="timeline-wrapper">
    <div class="timeline-item dark:!bg-dark-second">
      <div class="animated-background">
        <div class="background-masker dark:!bg-dark-second header-top"></div>
        <div class="background-masker dark:!bg-dark-second header-left"></div>
        <div class="background-masker dark:!bg-dark-second header-right"></div>
        <div class="background-masker dark:!bg-dark-second header-bottom"></div>
        <div class="background-masker dark:!bg-dark-second subheader-left"></div>
        <div class="background-masker dark:!bg-dark-second subheader-right"></div>
        <div class="background-masker dark:!bg-dark-second subheader-bottom"></div>
        <div class="background-masker dark:!bg-dark-second content-top"></div>
        <div class="background-masker dark:!bg-dark-second content-first-end"></div>
        <div class="background-masker dark:!bg-dark-second content-second-line"></div>
        <div class="background-masker dark:!bg-dark-second content-second-end"></div>
        <div class="background-masker dark:!bg-dark-second content-third-line"></div>
        <div class="background-masker dark:!bg-dark-second content-third-end"></div>
      </div>
    </div>
  </div>
  <div class="timeline-wrapper">
    <div class="timeline-item dark:!bg-dark-second">
      <div class="animated-background">
        <div class="background-masker dark:!bg-dark-second header-top"></div>
        <div class="background-masker dark:!bg-dark-second header-left"></div>
        <div class="background-masker dark:!bg-dark-second header-right"></div>
        <div class="background-masker dark:!bg-dark-second header-bottom"></div>
        <div class="background-masker dark:!bg-dark-second subheader-left"></div>
        <div class="background-masker dark:!bg-dark-second subheader-right"></div>
        <div class="background-masker dark:!bg-dark-second subheader-bottom"></div>
        <div class="background-masker dark:!bg-dark-second content-top"></div>
        <div class="background-masker dark:!bg-dark-second content-first-end"></div>
        <div class="background-masker dark:!bg-dark-second content-second-line"></div>
        <div class="background-masker dark:!bg-dark-second content-second-end"></div>
        <div class="background-masker dark:!bg-dark-second content-third-line"></div>
        <div class="background-masker dark:!bg-dark-second content-third-end"></div>
      </div>
    </div>
  </div>
  <div class="timeline-wrapper">
    <div class="timeline-item dark:!bg-dark-second">
      <div class="animated-background">
        <div class="background-masker dark:!bg-dark-second header-top"></div>
        <div class="background-masker dark:!bg-dark-second header-left"></div>
        <div class="background-masker dark:!bg-dark-second header-right"></div>
        <div class="background-masker dark:!bg-dark-second header-bottom"></div>
        <div class="background-masker dark:!bg-dark-second subheader-left"></div>
        <div class="background-masker dark:!bg-dark-second subheader-right"></div>
        <div class="background-masker dark:!bg-dark-second subheader-bottom"></div>
        <div class="background-masker dark:!bg-dark-second content-top"></div>
        <div class="background-masker dark:!bg-dark-second content-first-end"></div>
        <div class="background-masker dark:!bg-dark-second content-second-line"></div>
        <div class="background-masker dark:!bg-dark-second content-second-end"></div>
        <div class="background-masker dark:!bg-dark-second content-third-line"></div>
        <div class="background-masker dark:!bg-dark-second content-third-end"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  margin: 0;
  background-color: #e9ebee;
}
.timeline-item {
  background: #fff;
  border: 1px solid;
  border-color: #e5e6e9 #dfe0e4 #d0d1d5;
  border-radius: 3px;
  padding: 12px;
  margin: 10px auto;
  min-height: 200px;
}

@keyframes placeHolderShimmer {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}

.animated-background {
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background: #f6f7f8;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  background-size: 800px 104px;
  height: 96px;
  position: relative;
}

.background-masker {
  background: #fff;
  position: absolute;
}


/* Every thing below this is just positioning */

.background-masker.header-top,
.background-masker.header-bottom,
.background-masker.subheader-bottom {
  top: 0;
  left: 40px;
  right: 0;
  height: 10px;
}

.background-masker.header-left,
.background-masker.subheader-left,
.background-masker.header-right,
.background-masker.subheader-right {
  top: 10px;
  left: 40px;
  height: 8px;
  width: 10px;
}

.background-masker.header-bottom {
  top: 18px;
  height: 6px;
}

.background-masker.subheader-left,
.background-masker.subheader-right {
  top: 24px;
  height: 6px;
}

.background-masker.header-right,
.background-masker.subheader-right {
  width: auto;
  left: 300px;
  right: 0;
}

.background-masker.subheader-right {
  left: 230px;
}

.background-masker.subheader-bottom {
  top: 30px;
  height: 10px;
}

.background-masker.content-top,
.background-masker.content-second-line,
.background-masker.content-third-line,
.background-masker.content-second-end,
.background-masker.content-third-end,
.background-masker.content-first-end {
  top: 40px;
  left: 0;
  right: 0;
  height: 6px;
}

.background-masker.content-top {
  height: 20px;
}

.background-masker.content-first-end,
.background-masker.content-second-end,
.background-masker.content-third-end {
  width: auto;
  left: 380px;
  right: 0;
  top: 60px;
  height: 8px;
}

.background-masker.content-second-line {
  top: 68px;
}

.background-masker.content-second-end {
  left: 420px;
  top: 74px;
}

.background-masker.content-third-line {
  top: 82px;
}

.background-masker.content-third-end {
  left: 300px;
  top: 88px;
}
</style>
