import localStorageUtil from '@utils/localStorage';

/**
 * 全局组件大小
 * @returns 返回 `window.localStorage` 中读取的缓存值 `globalComponentSize`
 */
export const globalComponentSize: string = localStorageUtil.getItem('themeConfig')?.globalComponentSize;
