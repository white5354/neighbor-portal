<template>
  <div class="w-full header flex justify-center fixed top-0">
    <header class="w-[1200px] flex flex-row h-[70px] justify-center items-center">
      <div>
        <img src="@/assets/images/logo.png" alt="" style="width: 100px;">
      </div>
      <ul class="flex grow items-center justify-between ml-[70px]">
        <li v-for="(item, index) in colums" :key="index" class=" px-[18px] leading-[70px] cursor-pointer hover:font-bold hover:text-primary" :class="{'active': item.active}">
          {{ item.name }}
        </li>
      </ul>
      <div class="ml-[200px] rounded-full bg-primary px-[30px] py-[5px] text-white font-bold cursor-pointer :hover:bg-primary-500/50">
        登录
      </div>
    </header>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
const colums = [
  {
    name: "首页",
    path: "/home",
    active: false
  },
  {
    name: "在线下单",
    path: "/order",
    active: false
  },
  {
    name: "服务介绍",
    path: "introduce",
    active: false
  },
  {
    name: "关于我们",
    path: "/about",
    active: false
  },
  {
    name: "常见问题",
    path: "/problem",
    active: false
  },
];
onMounted(() => {
  // const path = 
});
</script>

<style scoped>
.header {
  border-width: 0 0 1px;
  box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.11);
}
.active {
  color: '#f3d54b';
}
</style>
