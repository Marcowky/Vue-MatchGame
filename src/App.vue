<template>
  <div class="center-box main-box">
    <div class="tltle" />
    <div class="context-box">
      <router-view />
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.main-box {
  height: 100vh;
  background-image: url("./assets/images/background.png");
  background-size: cover;
  background-position: center;
}

.context-box {
  position: absolute;
  top: 25%;
  width: 100%;
  background-image: url("./assets/images/context.png");
  background-size: 100% 100%;
  background-position: center;
}

.tltle {
  position: absolute;
  top: 5%;
  width: 300px;
  height: 163px;
  background-image: url("./assets/images/title.png");
  background-size: 100% 100%;
  background-position: center;
}

el-button {
  touch-action: manipulation;
}
</style>
