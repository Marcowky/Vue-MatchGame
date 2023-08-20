<template>
    <div class="center-box">
        <el-text class="secret-text small-text">
            按：本文是少数派会员内容《冰岛环游攻略》的第一篇。因投稿较长，经我们建议进一步扩展为共四篇的系列文章。其中，本文讲述作者两次前往冰岛的旅行体验，后面三篇则是分别围绕「冰岛是什么」「玩什么」「怎么玩」展开叙述，内容包括冰岛介绍、景点和路线分享、游玩攻略、租车选择、开销统计等等。

            少数派会员可以前往目录页查看其余篇目。如果你对本文感兴趣，欢迎考虑成为会员，看到更多专属精彩内容，并获得付费栏目畅读、会员社区、专属优惠、定制周边等丰富权益。

            来冰岛之前，它于我而言是梦乡一般的存在。在南方生活了二十几年，我从未见过下雪的样子，体验过最寒冷的冬天也不过是大风夹雨的零度，而远在世界尽头的冰岛满足我对冬天的一切遐想。

            在2022年的冬天，我第一次前往冰岛，却未曾料到梦乡会变成梦魇。我们落地冰岛的第一天，就目睹了12月的初雪，同时也是暴风雪。我们乘坐的航班由于天气原因延误5小时，落地机场后又因为封路被困在机场3小时，就这样在机场虚晃了一天。
        </el-text>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { router } from '../routes/router'// 导入路由

const page = ref(router.currentRoute.value.query.page)

const goToInit = () => {
    router.push({
        path: "/initgame"
    })
}
</script>

<style scoped>
.secret-text {
    width: 80%;
    margin-top: 25px;
    margin-bottom: 50px;
    height: 200px;
    /* Set the desired height */
    overflow: auto;
    /* Add scrollbars when content overflows */
}
</style>
