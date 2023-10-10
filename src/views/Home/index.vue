<template>
  <div class="text-primary">
    <div class="top"></div>
    <div>
      <div>社区邻里，一呼百应！送取、帮办、解忧，让生活更轻松</div>
      <div>轻松成为跑腿，让你的力量帮助邻里的生活变得更好</div>
    </div>
    <Banner></Banner>
  </div>
</template>

<script setup>
import Banner from "../../components/Banner/index.vue";
import { ref } from "vue";
const count = ref(0);
</script>

<style scoped>
.top {
  background: url("@/assets/images/home/header-bg.png") center;
  min-width: 1220px;
}
</style>
