<template>
  <el-result title="404" subTitle="抱歉，请求错误">
    <template #icon>
      <el-image src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" />
    </template>
    <template #extra>
      <el-button type="primary" @click="goBackClick">返回</el-button>
    </template>
  </el-result>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { useRouter } from 'vue-router';

  export default defineComponent({
    name: '404',
    setup() {
      const router = useRouter();
      // 返回
      const goBackClick = () => {
        router.go(-1);
      };

      return {
        goBackClick
      };
    }
  });
</script>
