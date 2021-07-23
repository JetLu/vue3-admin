<template>
  <el-container class="layout-container flex-center">
    <Header />
    <Main />
  </el-container>
</template>

<script lang="ts">
  import Header from '@/layout/component/header.vue';
  import Main from '@/layout/component/main.vue';
  export default {
    name: 'LayoutTransverse',
    components: { Header, Main }
  };
</script>
