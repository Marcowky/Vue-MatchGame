<template>
    <div class="center-box info-box">
        <div class="rest-match-box">
            <el-text class="big-text"> 剩余火柴{{ matchCount }}根 </el-text>
        </div>
        <div class="match-table-box">
            <el-text class="space middle-text"> 捏捏 {{ nienieCount }} </el-text>
            <el-text class="middle-text"> 呢呢 {{ neneCount }} </el-text>
        </div>
    </div>
    <div class="center-box func-box">
        <div class="arrow-box">
            <el-button :class="{ 'arrow': nienieTurn == 1, 'arrow-none': true, 'arrow-left': true }"></el-button>
            <el-button :class="{ 'arrow': nienieTurn == 0, 'arrow-none': true }"></el-button>
        </div>
        <div>
            <el-button :class="{ 'nienie-button-active': nienieTurn == 1, 'nienie-button': true }"></el-button>
            <el-button :class="{ 'nene-button-active': nienieTurn == 0, 'nene-button': true }"></el-button>
        </div>
        <div>
            <template v-for="index in 5">
                <el-button class="small-button" @click=chooseNum(index)>
                    <el-text class="small-button-text middle-text"> {{ index }} </el-text>
                </el-button>
            </template>
        </div>
        <el-button class="big-button" style="margin-top: 15px;" v-if="showGoToButton" @click=goToFinish>
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
const nieniewin = ref(1)
const showGoToButton = ref(false)

const chooseNum = (matchNum) => {
    console.log(router.currentRoute.value.query.nieniestart)
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
        nienieTurn.value = 0
    }
    else {
        neneCount.value += matchNum
        nienieTurn.value = 1
    }
}
const gameFinish = () => {
    showGoToButton.value = true
    nienieTurn.value = (nienieTurn.value + 1) % 2
    if (nienieTurn.value == 1) nieniewin.value = 0
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
    margin: 10px;
}

.match-table-box {
    margin: 10px;
}

.space {
    margin-right: 60px;
}
</style>
