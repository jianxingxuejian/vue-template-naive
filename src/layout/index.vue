<template>
  <n-layout has-sider class="h-screen">
    <n-layout-sider></n-layout-sider>
    <n-layout>
      <n-layout-header></n-layout-header>
      <n-layout-content>
        <layout-main />
      </n-layout-content>
      <n-layout-footer></n-layout-footer>
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
  import { LayoutMain } from './components'
</script>
