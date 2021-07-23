import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store, key } from './store';
import { directive } from '@/utils/directive';
import { globalComponentSize } from '@/utils/componentSize';

import 'normalize.css';
import '@/assets/styles/index.scss';

import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import '@/theme/index.scss';

import mitt from 'mitt';

const app = createApp(App);
app.use(router).use(store, key).use(ElementPlus, { size: globalComponentSize });
// 路由准备完毕再挂载
router.isReady().then(() => app.mount('#app'));

app.config.globalProperties.mittBus = mitt();

directive(app);
