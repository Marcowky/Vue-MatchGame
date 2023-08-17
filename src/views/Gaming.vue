<template>
    <div class="rest-match-box"> 剩余火柴{{ matchCount }} </div>
    <template v-for="index in 5">
        <el-button class="choose-num-button" @click=chooseNum(index)> {{ index }} </el-button>
    </template>
    <el-button class="goto-finish-button" v-if="showGoToButton" @click=goToFinish> goToFinish </el-button>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'// 导入路由

const router = useRouter()
const route = useRoute()
const matchCount = ref(route.query.matchcount)
const nieniewin = ref(true)
const showGoToButton = ref(true)

const chooseNum = (matchNum) => {

}
const judgeGame = () => {

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
