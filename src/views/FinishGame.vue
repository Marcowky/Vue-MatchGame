<template>
    <div class="status-box"> 赢了！ </div>
    <el-button class="goto-init-button" @click=goToInit> goToInit </el-button>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'// 导入路由

const router = useRouter()
const route = useRoute()
const nieniewin = ref(route.query.nieniewin)

const goToInit = () => {
    router.push({
        path: "/initgame"
    })
}
</script>

<style scoped>
.status-box {
    background-color: brown;
    height: 100px;
    width: 100px;
}

.goto-init-button {}
</style>
