<template>
  <div>
    <el-carousel height="150px">
      <el-carousel-item v-for="item in banners" :key="item">
        <!-- <img :src="item.url" alt="" srcset=""> -->
        {{ item.url }}

      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
import {reactive} from 'vue'
const banners =  reactive([{
  url: '1'
}])
</script>

<style  scoped>

</style>