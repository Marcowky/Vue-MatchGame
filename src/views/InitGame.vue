<template>
    <div class="info-box">
        <div class="please-choose-box"> 请选择火柴数目 </div>
        <el-button class="add-match-button" @click=changeCount(true)> ADD </el-button>
        <el-text class="match-count">{{ matchCount }}</el-text>
        <el-button class="reduce-match-button" @click=changeCount(false)> REDUCE </el-button>
    </div>
    <div class="func-box">
        <div class="who-first-box"> 谁先取 </div>
        <el-button class="nienie-first-button" @click=chooseFirst(true)> nienie </el-button>
        <el-button class="nene-first-button" @click=chooseFirst(false)> nene </el-button>
        <el-button class="goto-gaming-button" v-if="showGoToButton" @click=goToGaming> goToGaming </el-button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { router } from '../routes/router'// 导入路由

const matchCount = ref(15)
const nieniestart = ref(true)
const showGoToButton = ref(false)

const changeCount = (isAdd) => {
    if (!isAdd) {
        if (matchCount.value > 0) matchCount.value--
    } else {
        if (matchCount.value < 30) matchCount.value++
    }
}
const chooseFirst = (isNienie) => {
    if (!showGoToButton.value) showGoToButton.value = true
    nieniestart.value = isNienie
}
const goToGaming = () => {
    router.push({
        path: "/gaming",
        query: {
            matchcount: matchCount.value,
            nieniestart: nieniestart.value
        }
    })
}
</script>

<style scoped>
@import "../styles/mainLayout.css";

.please-choose-box {
    background-color: brown;
    height: 100px;
    width: 100%;
}

.who-first-box {
    background-color: brown;
    height: 100px;
    width: 100%;
}


.add-match-button {}

.reduce-match-button {}

.goto-gaming-button {}

.nienie-first-button {}

.nene-first-button {}
</style>
