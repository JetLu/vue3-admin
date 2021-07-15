import { ConfigEnv, loadEnv, UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import legacy from '@vitejs/plugin-legacy';
// import ViteComponents, { ElementPlusResolver, VantResolver } from 'vite-plugin-components';
const path = require('path');
const CWD = process.cwd();

// path组合
const resolvePath = dir => path.resolve(__dirname, dir);

// https://cn.vitejs.dev/config/
export default ({ mode }: ConfigEnv): UserConfig => {
  console.log('mode :>> ', mode);
  // 环境变量
  const { VITE_BASE_URL } = loadEnv(mode, CWD);
  return {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "@styles/_variables.scss";
          @import "@styles/mixins.scss";
          `
        }
      },
      modules: {
        localsConvention: 'camelCase' // 默认只支持驼峰，修改为同时支持横线和驼峰
      }
    },
    plugins: [
      vue(),
      vueJsx(),
      legacy({
        targets: ['defaults', 'not IE 11']
      })
      // ViteComponents({
      //   // 自动导入组件（还不够完善，可能会有样式丢失）
      //   // valid file extensions for components.
      //   extensions: ['vue', 'tsx'],
      //   customComponentResolvers: [ElementPlusResolver(), VantResolver()]
      // }),
    ],
    resolve: {
      alias: {
        '@': resolvePath('src'),
        '@components': resolvePath('src/components'),
        '@views': resolvePath('src/views'),
        '@styles': resolvePath('src/assets/styles'),
        '@images': resolvePath('src/assets/images'),
        '@utils': resolvePath('src/utils'),
        '@api': resolvePath('src/api')
      }
    },
    base: VITE_BASE_URL, // 设置打包路径
    optimizeDeps: {
      include: ['vue', 'vue-router', 'element-plus', 'lodash', 'vuedraggable/src/vuedraggable'],
      exclude: ['vue-demi']
    },
    server: {
      // host: 'dev.staging.imrfresh.com', // HOST
      https: false,
      port: 8080, // 设置服务启动端口号
      open: false, // 设置服务启动时是否自动打开浏览器
      cors: true, // 允许跨域
      // 设置代理，根据我们项目实际情况配置
      proxy: {
        // '/api': {
        //   target: 'http://172.16.150.8:3008',
        //   changeOrigin: true
        //   // rewrite: path => path.replace(/^\/api/, '')
        // },
        '/api': {
          target: 'http://yapi-ops.missfresh.net/project/1652',
          changeOrigin: true
        },
        '/gitee': {
          target: 'https://gitee.com',
          ws: true,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/gitee/, '')
        }
      }
    }
  };
};
