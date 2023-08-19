<template>
    <div class="info-box">
        <div class="please-choose-box">
            <el-text class="big-text">选择火柴数目!</el-text>
        </div>
        <div class="match-choose-box">
            <el-button class="small-button" @click=changeCount(false)>
                <el-text class="small-button-text middle-text">-</el-text>
            </el-button>
            <el-text class="middle-text">{{ matchCount }}</el-text>
            <el-button class="small-button" @click=changeCount(true)>
                <el-text class="small-button-text middle-text">+</el-text>
            </el-button>
        </div>
    </div>
    <div class="func-box">
        <div class="who-first-box">
            <el-text class="middle-text">WHO'S FIRST?</el-text>
        </div>
        <div>
            <el-button class="nienie-first-button" @click=chooseFirst(true)> nienie </el-button>
            <el-button class="nene-first-button" @click=chooseFirst(false)> nene </el-button>
        </div>
        <el-button class="big-button" v-if="showGoToButton" @click=goToGaming>
            <el-text class="big-button-text middle-text"> 开始游戏! </el-text>
        </el-button>
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
@import "../assets/css/style.css";

.please-choose-box {
    background-color: brown;
    height: 100px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}

.who-first-box {
    background-color: brown;
    height: 100px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}

.match-choose-box {}

.add-match-button {}

.reduce-match-button {}

.goto-gaming-button {}

.nienie-first-button {}

.nene-first-button {}
</style>
