<template>
    <div class="rest-match-box"> 剩余火柴{{ matchCount }} </div>
    <template v-for="index in 5">
        <el-button class="choose-num-button" @click=chooseNum(index)> {{ index }} </el-button>
    </template>
    <div class="rest-match-box"> 捏捏火柴数{{ nienieCount }} </div>
    <div class="rest-match-box"> 呢呢火柴数{{ neneCount }} </div>
    <el-button class="goto-finish-button" v-if="showGoToButton" @click=goToFinish> goToFinish </el-button>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'// 导入路由

const router = useRouter()
const route = useRoute()
const matchCount = ref(route.query.matchcount)
const nienieTurn = ref(route.query.nieniestart)
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
.rest-match-box {
    background-color: brown;
    height: 100px;
    width: 100%;
}

.choose-num-button {}

.goto-finish-button {}
</style>
