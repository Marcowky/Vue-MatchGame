<template>
  <div class="main-box">
    <router-view />
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

el-button {
  touch-action: manipulation;
}
</style>
