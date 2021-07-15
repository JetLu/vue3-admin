# fe-form-design

基于 Vite2.x + Vue3.x + TypeScript + element-plus 低代码平台表单设计器

## 技术栈

- 编程语言：[TypeScript 4.x](https://www.typescriptlang.org/zh/) + [JavaScript](https://www.javascript.com/)
- 构建工具：[Vite 2.x](https://cn.vitejs.dev/)
- 前端框架：[Vue 3.x](https://v3.cn.vuejs.org/)
- 路由工具：[Vue Router 4.x](https://next.router.vuejs.org/zh/index.html)
- 状态管理：[Vuex 4.x](https://next.vuex.vuejs.org/)
- PC 端 UI 框架：[Element Plus](https://element-plus.org/#/zh-CN)
- CSS 预编译： [Sass](https://sass.bootcss.com/documentation)
- HTTP 工具：[Axios](https://axios-http.com/)
- Git Hook 工具：[husky](https://typicode.github.io/husky/#/) + [lint-staged](https://github.com/okonet/lint-staged)
- 代码规范：[EditorConfig](http://editorconfig.org) + [Prettier](https://prettier.io/) + [ESLint](https://eslint.org/) + [JavaScript Standard Style](https://github.com/standard/standard/blob/master/docs/README-zhcn.md)
- 提交规范：[Commitizen](http://commitizen.github.io/cz-cli/) + [Commitlint](https://commitlint.js.org/#/)

### 安装依赖

```sh
npm install
# or
yarn add
```

### 修改 hosts(本地开发)

```sh
sudo vim /etc/hosts

127.0.0.1 dev.staging.missfreshh.net
```

### 启动项目

```sh
npm run dev
访问地址： http://dev.staging.missfreshh.net:3000
```

### 项目预览

```sh
npm run preview
```

### 项目打包

```sh
npm run build
```

### Lints and fixes files

```sh
npm lint
```

### 代码提交规范

- `feat` 新功能（feature）
- `fix` 修复问题/BUG
- `style` 代码风格相关无影响运行结果的
- `perf` 优化/性能提升
- `refactor` 重构
- `revert` 撤销修改
- `test` 测试相关
- `docs` 文档/注释
- `build` 对构建系统或者外部依赖项进行了修改
- `chore` 依赖更新/脚手架配置修改等
- `workflow` 工作流改进
- `ci` 持续集成
- `types` 类型定义文件更改
- `wip` 开发中

### 为了统一代码提交格式，采用 [Angular 规范](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#heading=h.greljkmo14y0)，通过钩子自动校验格式，如果直接使用 git 命令提交代码会报错，提交失败。

1. 格式化的 Commit message，有以下几个好处：提供更多的历史信息，方便快速浏览。

```sh
git log <last tag> HEAD --pretty=format:%s
```

2. 可以过滤某些 commit（比如文档改动），便于快速查找信息。

```sh
git log <last release> HEAD --grep feat
```

3. 可以直接从 commit 生成 Change log。

### 代码提交使用方式

可以直接使用命令

```sh
npm run commit
```

使用`git cz`，需要全局安装：commitizen

```sh
git-cz
```

代码推送到远程

```sh
git push
```

## 项目目录结构

```bash

├── .husky # Git Hook 工具用来规范代码提交和校验
├── src
│   ├── api 项目中http请求
│   │   └── axiosHandler # 统一配置和封装axios
│   ├── assets # 静态资源
│   │   ├── images
│   │   └── styles
│   ├── common
│   ├── components # 公共组件
│   │   └── layout # 项目布局
│   ├── enums  # 枚举
│   ├── plugins  # 插件配置
│   │   └── element-plus # element-plus UI配置
│   ├── router  # 路由配置
│   │   ├── index # 路由初始化，路由钩子，基础路由地址等配置
│   │   └── routes # 项目路由地址
│   ├── store  # vuex
│   │   ├── index # 动态引入vuex
│   │   └── modules # vuex项目相关的modules
│   ├── utils  # utils辅助类
│   │   ├── localStorage # 对localStorage的操作，添加localStorage、获取localStorage和清空localStorage
│   │   ├── localStorage # 对localStorage的操作，添加localStorage、获取localStorage和清空localStorage
│   │   └── util # 其他辅助，类型校验等
│   └── views  # 项目业务逻辑目录
├── .cz-config.js # cz-customizable提交配置
├── .eslintignore # eslint忽略校验配置
├── .eslintrc.js # eslint校验配置
├── .gitignore # git忽略校验配置
├── .prettierignore # prettier忽略配置
└── .prettierrc.js # prettier校验配置

```
