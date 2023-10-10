<template>
  <div class="bg-secondary text-secondary w-full p-[80px] flex justify-around">
    <div class="w-[1200px] flex justify-around">
      <div class="w-[900px]">
        <ul class="flex justify-around ">
          <li v-for="(item, index) of foots" :key="index" class="w-[200px]">
            <a href="" v-if="item.url">{{ item.name }}</a>
            <span v-else>{{ item.name }}</span>
            <ul v-if="item.children" class="mt-[30px] text-sm">
              <li v-for="(j,index) of item.children" :key="index">
                <el-link :underline="false">{{ j.name }}</el-link>
              </li>
            </ul>
          </li>
          <li class="w-[300px]">
            <span>联系客服</span>
            <ul class="mt-[30px] text-sm leading-8">
              <li>客服电话：18292005354</li>
              <li>电子邮箱：1031730742@qq.com</li>
              <li class="leading-5">通过APP或微信搜索邻优公众号联系“在线客服”提供7*24小时服务</li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="flex">
        <div class="flex flex-col items-start">
          <p class="mb-[25px]">官方微信</p>
          <img src="@/assets/images/home/uuewm.jpg" style="width: 100px;height: 100px;" alt="">
          <div class="flex justify-center mt-[5px] items-center">
            <img src="@/assets/images/home/weixin.png" style="width: 20px;height: 20px;" alt="" srcset="">
            <span class="ml-[5px]">关注微信</span>
          </div>
        </div>
        <div class="flex flex-col items-start ml-[50px]">
          <p class="mb-[25px]">官方微博</p>
          <img src="@/assets/images/home/ewmsina.jpg" style="width: 100px;height: 100px;" alt="">
          <div class="flex justify-center mt-[5px] items-center">
            <img src="@/assets/images/home/sina.png" class="h-[20px] w-[20px]" alt="" srcset="">
            <span class="ml-[5px]">关注微博</span>
          </div>
        </div>
      </div>
    </div>
   
  </div>
</template>

<script setup>
import { reactive } from "vue";
const foots = reactive([
  {
    name: "关于我们",
    url: '#'
  },
  {
    name: "常见问题",
    children: [
      {
        name: "如何下单",
        url: "",
      },
      {
        name: "如何付费",
        url: "",
      },
      {
        name: "如何开具发票",
      },
    ],
    
  },
]);
</script>

<style scoped>
:deep(.el-link__inner) {
  line-height: 32px;
}
</style>
