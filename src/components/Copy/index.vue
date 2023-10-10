<template>
  <div class="bg-black text-sm  text-secondary flex flex-col p-[10px] w-full justify-center fixed bottom-0 items-center h-[80px]">
    <div class="flex leading-8">
      <p>开发者：{{ info.company }}</p>
      <p class="ml-[70px]">版本号：{{ info.version }}</p>
      <p class="ml-[100px]">
        <el-link :underline="false">权限 | 隐私</el-link>
      </p>
    </div>
    <div class="flex items-center">
      <div>
        版权所有：@2023{{ info.company }}
      </div>
      <img class="ml-[70px]" src="@/assets/images/gongan.jpg" alt=""  style="width: 20px;height: 20px;">
      <div class="ml-[5px]">{{ info.beian }}</div>

    </div>
  </div>
</template>

<script  setup>
import {CONSTANTS} from '../../stores/enums.js'
import {reactive} from 'vue'
const info = reactive({
  company: CONSTANTS['公司名称'],
  beian: CONSTANTS['公司网备号'],
  version: CONSTANTS['版本号']
})
</script>

<style  scoped>
:deep(.el-link__inner) {
  color: #666 !important
}
</style>