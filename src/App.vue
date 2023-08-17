<template>
  <div class="main-box">
    <!-- <InitGame v-if="gameStatus=='InitGame'" :matchCount="matchCount"></InitGame>
    <Gaming v-if="gameStatus=='Gaming'" :matchCount="matchCount"></Gaming>
    <FinishGame v-if="gameStatus=='FinishGame'" :matchCount="matchCount"></FinishGame> -->
    <router-view />
  </div>
</template>

<script setup>
// import { ref } from 'vue'
// import InitGame from './components/InitGame.vue'
// import Gaming from './components/Gaming.vue'
// import FinishGame from './components/FinishGame.vue'

// const gameStatus = ref("InitGame")
// const matchCount = ref(10)
</script>

<style scoped>
.main-box {
  height: 100vh;
}
</style>
