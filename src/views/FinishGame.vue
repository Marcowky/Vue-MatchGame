<template>
    <el-button class="secret-button" round color="#f0dbed" @click=goToSecret></el-button>
    <div class="center-box info-box">
        <el-button :class="{ 'nienie-button': true }" v-if="nieniewin == 1"></el-button>
        <el-button :class="{ 'nene-button': true }" v-else></el-button>
    </div>
    <div class="center-box">
        <el-text class="big-text"> 赢! win! </el-text>
    </div>
    <div class="center-box func-box">
        <el-button class="big-button" style="margin-top: 40px;" @click=goToInit>
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
const goToSecret = () => {
    router.push({
        path: "/secret"
    })
}
</script>
 
<style scoped>
.secret-button {
    position: absolute;
    top: -100px;
    right: 20px;
}
</style>
