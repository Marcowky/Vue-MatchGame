<template>
    <div class="info-box">
        <div class="status-box">
            <el-text class="big-text"> 赢! win! </el-text>
        </div>
    </div>
    <div class="func-box">
        <el-button class="big-button" @click=goToInit>
            <el-text class="big-button-text middle-text"> 再来一把! </el-text>
        </el-button>
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
@import "../assets/css/style.css";

.status-box {
    background-color: brown;
    height: 100px;
    width: 100%;
}

.goto-init-button {}
</style>
