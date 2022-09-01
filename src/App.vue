<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN">
    <naive-provider>
      <router-view />
    </naive-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
  import { zhCN, dateZhCN } from 'naive-ui'
</script>

<style lang="scss">
  @import '@/styles/scss/index.scss';
</style>
