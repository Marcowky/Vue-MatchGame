<template>
    <div class="info-box">
        <div class="rest-match-box">
            <el-text class="big-text"> 剩余火柴{{ matchCount }}根 </el-text>
        </div>
        <div class="rest-match-box">
            <el-text class="middle-text"> 捏捏{{ nienieCount }} </el-text>
            <el-text class="middle-text"> 呢呢{{ neneCount }} </el-text>
        </div>


    </div>
    <div class="func-box">
        <div class="rest-match-box"></div>
        <div class="rest-match-box">
            <el-text class="middle-text"> 捏捏 </el-text>
            <el-text class="middle-text"> 呢呢 </el-text>
        </div>
        <div>
            <template v-for="index in 5">
                <el-button class="small-button" @click=chooseNum(index)>
                    <el-text class="small-button-text middle-text"> {{ index }} </el-text>
                </el-button>
            </template>
        </div>
        <el-button class="big-button" v-if="showGoToButton" @click=goToFinish>
            <el-text class="big-button-text middle-text"> 游戏结束! </el-text>
        </el-button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { router } from '../routes/router'// 导入路由

const matchCount = ref(router.currentRoute.value.query.matchcount)
const nienieTurn = ref(router.currentRoute.value.query.nieniestart)
const nienieCount = ref(0)
const neneCount = ref(0)
const nieniewin = ref(true)
const showGoToButton = ref(false)

const chooseNum = (matchNum) => {
    if (matchCount.value - matchNum <= 0) {
        addNum(matchCount.value)
        matchCount.value = 0
        gameFinish()
    }
    else {
        addNum(matchNum)
        matchCount.value -= matchNum
    }
}
const addNum = (matchNum) => {
    if (nienieTurn.value == true) {
        nienieCount.value += matchNum
        nienieTurn.value = false
    }
    else {
        neneCount.value += matchNum
        nienieTurn.value = true
    }
}
const gameFinish = () => {
    showGoToButton.value = true
    if (!nienieTurn.value) nieniewin.value = false
}
const goToFinish = () => {
    router.push({
        path: "/finishgame",
        query: {
            nieniewin: nieniewin.value
        }
    })
}
</script>

<style scoped>
@import "../assets/css/style.css";

.rest-match-box {
    background-color: brown;
    height: 100px;
    width: 100%;
}

.choose-num-button {}

.goto-finish-button {}
</style>
