<template>
  <main>
    <Container />
  </main>
</template>
<script setup lang="ts">
import Container from "./main/ContainerView.vue"
import {ref , onMounted } from "vue"

onMounted(() => {
  console.log('登录状态打印', import.meta.env)
})
</script>