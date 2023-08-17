<template>
    <div class="status-box"> Gaming </div>
    <el-button class="add-match-button" @click=changeCount(true)> ADD </el-button>
    <el-text class="match-count">{{ matchCount }}</el-text>
    <el-button class="reduce-match-button" @click=changeCount(false)> REDUCE </el-button>
    <el-button class="goto-gaming-button" @click=goToFinish> goToFinish </el-button>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, onBeforeRouteUpdate } from 'vue-router'// 导入路由

const router = useRouter()
const matchCount = ref(0)
const nieniewin = ref(true)

const changeCount = (isAdd) => {
    if (!isAdd) {
        if(matchCount.value > 0) matchCount.value--
    } else {
        if(matchCount.value < 30) matchCount.value++
    }
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
.status-box {
    background-color: brown;
    height: 100px;
    width: 100px;
}
.add-match-button {
}
.reduce-match-button {
}
.goto-gaming-button {
}
</style>
