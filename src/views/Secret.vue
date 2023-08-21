<template>
    <div class="center-box">
        <el-text class="secret-text small-text">
            大傻捏捏：<br>
            yopyop yopyop！yopyop yopyop... 好像又开始便秘了👉👈<br>
            其实说，这个夏天是我有清晰记忆以来，最美好难忘的夏天，因为在这个夏天，在丰阳遇见了很多很好很有意思的朋友；因为在这个夏天，和某个人一起去了扬名射箭、打台球保龄球(就是略菜)；因为在这个夏天，和某个人一起吃了很多好吃的甜点雪糕(居然有人不喜欢吃抹茶红豆，太没品辣)；因为在这个夏天，和某个人一起自习，一起散步，一起在海边放烟花，分享了很多之前从来没有说出口的事情；因为在这个夏天，开始被某些人带偏说一些怪怪口头禅，哇偶哇偶~<br>
            我想我大概是喜欢上她了捏。是从什么时候开始喜欢的呢？(p.s 不要看呢呢朋友圈最新那条C位是谁😋)<br>
            喜欢她走进软工自习室时蹦蹦跳跳的样子，喜欢她一边挥着拳头一边骂着男人真见，喜欢她对着柴犬弹舌，挥着手链逗猫猫，喜欢她偷偷在我位置上贴的小豆泥，喜欢她向我分享生活的点滴，也喜欢她能够接受我数不尽的碎碎念...这种感觉大概就像，漫步于长安万家灯火之间，灯火辉映繁华绚烂，安稳与欢乐融为一体，只觉得岁月悠长，但执子之手，也觉岁月静好。<br>
            anyway，总而言之，tonikaku，说人话就是，呢呢想以男朋友的身份和你一起西提沃克！假如您不嫌弃，就让呢呢做你的专属马仔🐎吧！！！<br>
            笨比呢呢
        </el-text>
        <el-button class="big-button" @click=goToInit style="margin-bottom: 80px; margin-top: 10px;">
            <el-text class="big-button-text middle-text"> 回到游戏! </el-text>
        </el-button>
    </div>
</template>

<script setup>
import { router } from '../routes/router'

const goToInit = () => {
    router.push({
        path: "/initgame"
    })
}
</script>

<style scoped>
.secret-text {
    width: 77%;
    margin-top: 40px;
    height: 60vh;
    overflow: auto;
}
</style>
