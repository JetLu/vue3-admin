<template>
  <router-view />
  <Setings ref="setingsRef" />
</template>

<script lang="ts">
  import {
    computed,
    ref,
    getCurrentInstance,
    onMounted,
    onBeforeMount,
    onUnmounted,
    nextTick,
    defineComponent,
    watch
  } from 'vue';
  import { useRoute } from 'vue-router';
  import { useStore } from '@/store/index';
  import localStorageUtil from '@utils/localStorage';
  import setIntroduction from '@/utils/setIconfont';
  import Setings from '@/layout/navBars/breadcrumb/setings.vue';

  export default defineComponent({
    name: 'App',
    components: { Setings },
    setup() {
      const { proxy } = getCurrentInstance() as any;
      const setingsRef = ref();
      const route = useRoute();
      const store = useStore();

      // 获取布局配置信息
      const getThemeConfig = computed(() => {
        return store.state.themeConfig.themeConfig;
      });

      // 布局配置弹窗打开
      const openSetingsDrawer = () => {
        setingsRef.value.openDrawer();
      };

      // 设置初始化，防止刷新时恢复默认
      onBeforeMount(() => {
        // 设置批量第三方 icon 图标
        setIntroduction.cssCdn();
        // 设置批量第三方 js
        setIntroduction.jsCdn();
      });

      // 页面加载时
      onMounted(() => {
        nextTick(() => {
          // 监听布局配置弹窗点击打开
          proxy.mittBus.on('openSetingsDrawer', () => {
            openSetingsDrawer();
          });
          // 获取缓存中的布局配置
          if (localStorageUtil.getItem('themeConfig')) {
            store.dispatch('themeConfig/setThemeConfig', localStorageUtil.getItem('themeConfig'));
            document.documentElement.style.cssText = localStorageUtil.getItem('themeConfigStyle');
          }
        });
      });

      // 页面销毁时，关闭监听布局配置
      onUnmounted(() => {
        proxy.mittBus.off('openSetingsDrawer', () => {
          console.log('close');
        });
      });

      // 监听路由的变化，设置网站标题
      watch(
        () => route.path,
        () => {
          nextTick(() => {
            document.title = `${route.meta.title} - ${getThemeConfig.value.globalTitle}`;
          });
        }
      );

      return {
        setingsRef,
        getThemeConfig
      };
    }
  });
</script>
