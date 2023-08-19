<template>
    <div class="center-box info-box">
        <div class="center-box please-choose-box">
            <el-text class="big-text">选择火柴数目!</el-text>
        </div>
        <div class="match-choose-box">
            <el-button class="small-button" @click=changeCount(false)>
                <el-text class="small-button-text middle-text">-</el-text>
            </el-button>
            <el-button class="match-count-button" disabled>
                <el-text class="big-button-text middle-text">{{ matchCount }}</el-text>
            </el-button>
            <el-button class="small-button" @click=changeCount(true)>
                <el-text class="small-button-text middle-text">+</el-text>
            </el-button>
        </div>
        <div class="center-box who-first-box">
            <el-text class="middle-text">WHO'S FIRST?</el-text>
        </div>
    </div>
    <div class="center-box func-box">
        
        <div class="center-box arrow-box">
            <div>
                <el-button :class="{ 'arrow': nieniestart==1, 'arrow-none': true, 'arrow-left': true }"></el-button>
                <span class="space"></span>
                <el-button :class="{ 'arrow': nieniestart==0, 'arrow-none': true }"></el-button>
            </div>
        </div>
        <div>
            <el-button :class="{ 'nienie-button-active': nieniestart==1, 'nienie-button': true }"
                @click="chooseFirst(1)"></el-button>
            <el-button :class="{ 'nene-button-active': nieniestart==0, 'nene-button': true }"
                @click="chooseFirst(0)"></el-button>
        </div>
        <el-button class="big-button" @click=goToGaming>
            <el-text class="big-button-text middle-text"> 开始游戏! </el-text>
        </el-button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { router } from '../routes/router'// 导入路由

const matchCount = ref(15)
const nieniestart = ref(1)

const changeCount = (isAdd) => {
    if (!isAdd) {
        if (matchCount.value > 0) matchCount.value--
    } else {
        if (matchCount.value < 30) matchCount.value++
    }
}
const chooseFirst = (isNienie) => {
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
    /* background-color:cornflowerblue; */
    margin: 10px;
}

.who-first-box {
    /* background-color:cornflowerblue; */
    margin-top: 10px;
}

.match-count-button:disabled {
    width: 160px;
    height: 70px;
    background-image: url('../assets/images/big-button.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    border: none;
    background-color: transparent;
}
</style>
