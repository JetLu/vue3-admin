declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// 声明文件，定义全局变量。其它 app.config.globalProperties.xxx，使用 getCurrentInstance() 来获取
interface Window {
  nextLoading: boolean;
}

// style
declare module '*.css';
declare module '*.less';
declare module '*.scss';

// 图片
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';

// 文件
declare module '*.json';
declare module '*.ts';
declare module '*.js';
