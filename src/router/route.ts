import { RouteRecordRaw } from 'vue-router';

/**
 * 路由meta对象参数说明
 * meta: {
 *      title:          菜单栏名称
 *      isLink：        是否超链接菜单，开启外链条件，`1、isLink:true 2、链接地址不为空`
 *      isHide：        是否隐藏此路由
 *      isKeepAlive：   是否缓存组件状态
 *      isAffix：       是否固定在 tagsView 栏上
 *      isIframe：      是否内嵌窗口，，开启条件，`1、isIframe:true 2、链接地址不为空`
 *      auth：          当前路由权限标识（多个请用逗号隔开），最后转成数组格式，用于与当前用户权限进行对比，控制路由显示、隐藏
 *      icon：          菜单、tagsView 图标
 * }
 */

export const dynamicRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '/',
    component: () => import('@/layout/index.vue'),
    redirect: '/home',
    meta: {
      isKeepAlive: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          isLink: '',
          isHide: false,
          isKeepAlive: true,
          isAffix: true,
          isIframe: false,
          auth: ['admin', 'test'],
          icon: 'iconfont icon-shouye'
        }
      },
      {
        path: '/system',
        name: 'system',
        component: () => import('@/layout/routerView/parent.vue'),
        redirect: '/system/menu',
        meta: {
          title: '系统设置',
          isLink: '',
          isHide: false,
          isKeepAlive: true,
          isAffix: false,
          isIframe: false,
          auth: ['admin'],
          icon: 'iconfont icon-xitongshezhi'
        },
        children: [
          {
            path: '/system/user',
            name: 'systemUser',
            component: () => import('@/views/system/user/index.vue'),
            meta: {
              title: '用户管理',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              auth: ['admin'],
              icon: 'iconfont icon-icon-'
            }
          }
        ]
      },
      {
        path: '/tools',
        name: 'tools',
        component: () => import('@/views/tools/index.vue'),
        meta: {
          title: '工具',
          isLink: '',
          isHide: false,
          isKeepAlive: true,
          isAffix: false,
          isIframe: false,
          auth: ['admin', 'test'],
          icon: 'iconfont icon-gongju'
        }
      },
      {
        path: '/link',
        name: 'layoutLinkView',
        component: () => import('@/layout/routerView/link.vue'),
        meta: {
          title: '外链',
          isLink: 'https://element-plus.gitee.io/#/zh-CN/component/installation',
          isHide: false,
          isKeepAlive: false,
          isAffix: false,
          isIframe: false,
          auth: ['admin'],
          icon: 'iconfont icon-caozuo-wailian'
        }
      },
      {
        path: '/iframes',
        name: 'layoutIfameView',
        component: () => import('@/layout/routerView/iframes.vue'),
        meta: {
          title: '内嵌iframe',
          isLink: 'https://www.baidu.com/',
          isHide: false,
          isKeepAlive: false,
          isAffix: true,
          isIframe: true,
          auth: ['admin'],
          icon: 'iconfont icon-neiqianshujuchucun'
        }
      }
    ]
  }
];
