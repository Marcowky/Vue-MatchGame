<template>
    <div class="info-box">
        <div class="status-box"> 赢了！ </div>
    </div>
    <div class="func-box">
        <el-button class="goto-init-button" @click=goToInit> goToInit </el-button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { router } from '../routes/router'// 导入路由

const nieniewin = ref(router.currentRoute.value.query.nieniewin)

const goToInit = () => {
    router.push({
        path: "/initgame"
    })
}
</script>

<style scoped>
@import "../styles/mainLayout.css";

.status-box {
    background-color: brown;
    height: 100px;
    width: 100px;
}

.goto-init-button {}
</style>
