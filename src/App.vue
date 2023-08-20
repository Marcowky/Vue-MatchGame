<template>
  <div class="center-box main-box">
    <div class="tltle" v-if="showTitle"/>
    <div class="context-box">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { router } from './routes/router'// 导入路由

const showTitle = ref(router.currentRoute.value.path != "/secret");

router.beforeEach((to, from) => {
    if(to !=from) {
      window.scrollTo(0, 0);
    }
    if (to.path.startsWith('/secret')) {
        showTitle.value = false;
    } else {
        showTitle.value = true;
    }
})
</script>

<style scoped>
.main-box {
  height: 96vh;
  background-image: url("./assets/images/background.png");
  background-size: contain;
  background-position: bottom center;
  background-repeat: no-repeat;
}

.context-box {
  position: relative;
  top: 20px;
  width: 100%;
  background-image: url("./assets/images/context.png");
  background-size: 100% 100%;
  background-position: center;
}

.tltle {
  position: relative;
  top: 15px;
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
