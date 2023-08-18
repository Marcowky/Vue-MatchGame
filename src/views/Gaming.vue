<template>
    <div class="info-box">
        <div class="rest-match-box"> 剩余火柴{{ matchCount }} </div>
        <template v-for="index in 5">
            <el-button class="choose-num-button" @click=chooseNum(index)> {{ index }} </el-button>
        </template>
    </div>
    <div class="func-box">
        <div class="rest-match-box"> 捏捏火柴数{{ nienieCount }} </div>
        <div class="rest-match-box"> 呢呢火柴数{{ neneCount }} </div>
        <el-button class="goto-finish-button" v-if="showGoToButton" @click=goToFinish> goToFinish </el-button>
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
@import "../styles/mainLayout.css";

.rest-match-box {
    background-color: brown;
    height: 100px;
    width: 100%;
}

.choose-num-button {}

.goto-finish-button {}
</style>
