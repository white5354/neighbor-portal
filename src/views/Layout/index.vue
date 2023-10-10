<template>
  <div class="flex flex-col justify-between items-center">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
    <Copy></Copy>
  </div>
</template>

<script setup>
import Header from '../../components/Header/index.vue'
import Footer from '../../components/Footer/index.vue'
import Copy from '../../components/Copy/index.vue'

</script>

<style  scoped>

</style>