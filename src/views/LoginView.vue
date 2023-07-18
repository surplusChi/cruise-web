<template>
  <div @click="handleLogin">
    点击
  </div>
</template>
<script setup lang="ts">
import request from "@/utils/request";
import { onMounted } from "vue"
onMounted(() => {
  console.log(request)
})
function handleLogin() {
  const data = {
    password: "123456",
    username: "0926"
  }
  request.post('/backStageUmsAdmin/login', data)
    .then((res:any) => {
      console.log(res)
    })
}
</script>