<template>
  <Button class="mybricks-button" :label="props.data.text" @click="handleClick" />
</template>

<script setup>
import { ref, getCurrentInstance, onBeforeMount } from 'vue'
import Button from "primevue/button";

// 部分primevue依赖这个配置的注入，需要在app注入一下
import PrimeVue from "primevue/config";
onBeforeMount(() => {
  const app = getCurrentInstance().appContext.app;
  app.use(PrimeVue)
})

// 定义 props
const props = defineProps(['env', 'data', 'inputs', 'outputs'])

const handleClick = () => {
  props.outputs?.click(props.data.text)
}

</script>

<style lang="less" scoped>
@import "primevue/resources/themes/md-light-indigo/theme.css";
.button {
  
}

</style>