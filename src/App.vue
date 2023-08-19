<template>
  <div class="center-box main-box">
    <div class="tltle"/>
    <div class="context-box">
      <router-view />
    </div>
    <div class="footbar"/>
  </div>
</template>

<script setup>

</script>

<style scoped>
.main-box {
  height: 98vh;
  background-image: url("./assets/images/background.png");
  background-size: cover;
  background-position: center;
}

.context-box {
  position: absolute;
  top: 30%;
  width: 100%;
  background-image: url("./assets/images/context.png");
  background-size: 100% 100%;
  background-position: center;
}

.tltle {
  position: absolute;
  top: 8%;
  width: 300px;
  height: 163px;
  background-image: url("./assets/images/title.png");
  background-size: 100% 100%;
  background-position: center;
}

.footbar {
  position: absolute;
  bottom: 0%;
  width: 400px;
  height: 50px;
  background-image: url("./assets/images/footbar.png");
  background-size: 100% 100%;
  background-position: center;
}
el-button {
  touch-action: manipulation;
}
</style>
