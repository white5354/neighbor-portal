<template>
  <div>
    <header class="w-[1200px] flex flex-row h-[70px] justify-center items-center ">
      <div>邻友帮帮</div>
      <ul class="flex grow">
        <li v-for="(item, index) in colums" :key="index">
          {{ item.name }}
        </li>
      </ul>
      <div class="">
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
    path: "",
  },
  {
    name: "在线下单",
    path: "",
  },
  {
    name: "服务介绍",
    path: "",
  },
  {
    name: "关于我们",
    path: "",
  },
  {
    name: "常见问题",
    path: "",
  },
];
onMounted(() => {
});
</script>

<style scoped></style>
