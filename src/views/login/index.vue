<template>
  <div class="login-container">
    <div class="login-content">
      <div class="login-content-main">
        <el-form class="login-content-form">
          <el-form-item>
            <el-input
              v-model="ruleForm.userName"
              type="text"
              placeholder="请输入用户名"
              prefix-icon="el-icon-user"
              clearable
              autocomplete="off"
            />
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="ruleForm.password"
              :type="isShowPassword ? 'text' : 'password'"
              placeholder="请输入密码"
              prefix-icon="el-icon-lock"
              autocomplete="off"
            >
              <template #suffix>
                <i
                  class="iconfont el-input__icon login-content-password"
                  :class="isShowPassword ? 'icon-yincangmima' : 'icon-xianshimima'"
                  @click="isShowPassword = !isShowPassword"
                >
                </i>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-row :gutter="15">
              <el-col :span="16">
                <el-input
                  v-model="ruleForm.code"
                  type="text"
                  maxlength="4"
                  placeholder="请输入验证码"
                  prefix-icon="el-icon-position"
                  clearable
                  autocomplete="off"
                />
              </el-col>
              <el-col :span="8">
                <div class="login-content-code">
                  <span class="login-content-code-img">1234</span>
                </div>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="login-content-submit" round :loading="loading.signIn" @click="onSignIn">
              <span>登 录</span>
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { toRefs, reactive, defineComponent, getCurrentInstance } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { ElMessage } from 'element-plus';
  import { initFrontEndControlRoutes } from '@/router/frontEnd';
  import { initBackEndControlRoutes } from '@/router/backEnd';
  import { useStore } from '@/store/index';
  import localStorageUtil from '@utils/localStorage';

  export default defineComponent({
    name: 'Login',
    setup() {
      const { proxy } = getCurrentInstance() as any;
      const store = useStore();
      const route = useRoute();
      const router = useRouter();
      const state = reactive({
        isShowPassword: false,
        ruleForm: {
          userName: 'admin',
          password: '123456',
          code: '1234'
        },
        loading: {
          signIn: false
        }
      });

      // 登录
      const onSignIn = async () => {
        state.loading.signIn = true;
        let defaultAuthPageList: Array<string> = [];
        let defaultAuthBtnList: Array<string> = [];
        // admin 页面权限标识，对应路由 meta.auth，用于控制路由的显示/隐藏
        let adminAuthPageList: Array<string> = ['admin'];
        // admin 按钮权限标识
        let adminAuthBtnList: Array<string> = ['btn.add', 'btn.del', 'btn.edit', 'btn.link'];
        // test 页面权限标识，对应路由 meta.auth，用于控制路由的显示/隐藏
        let testAuthPageList: Array<string> = ['test'];
        // test 按钮权限标识
        let testAuthBtnList: Array<string> = ['btn.add', 'btn.link'];
        // 不同用户模拟不同的用户权限
        if (state.ruleForm.userName === 'admin') {
          defaultAuthPageList = adminAuthPageList;
          defaultAuthBtnList = adminAuthBtnList;
        } else {
          defaultAuthPageList = testAuthPageList;
          defaultAuthBtnList = testAuthBtnList;
        }

        // 用户信息模拟数据
        const userInfos = {
          userName: state.ruleForm.userName,
          photo: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1813762643,1914315241&fm=26&gp=0.jpg',
          time: new Date().getTime(),
          authPageList: defaultAuthPageList,
          authBtnList: defaultAuthBtnList
        };
        // 存储 token 到浏览器缓存
        localStorageUtil.setItem('token', Math.random().toString(36).substr(0));
        // 存储用户信息到浏览器缓存
        localStorageUtil.setItem('userInfo', userInfos);
        // 1、请注意执行顺序(存储用户信息到vuex)
        store.dispatch('userInfos/setUserInfos', userInfos);
        if (!store.state.themeConfig.themeConfig.isRequestRoutes) {
          // 前端控制路由，2、请注意执行顺序
          await initFrontEndControlRoutes();
          signInSuccess();
        } else {
          // 模拟后端控制路由，isRequestRoutes 为 true，则开启后端控制路由
          // 添加完动态路由，再进行 router 跳转，否则可能报错 No match found for location with path "/"
          await initBackEndControlRoutes();
          // 执行完 initBackEndControlRoutes，再执行 signInSuccess
          signInSuccess();
        }
      };

      // 登录成功后的跳转
      const signInSuccess = () => {
        // 登录成功，跳到转首页
        // 添加完动态路由，再进行 router 跳转，否则可能报错 No match found for location with path "/"
        // 如果是复制粘贴的路径，非首页/登录页，那么登录成功后重定向到对应的路径中
        route.query?.redirect ? router.push(route.query.redirect as string) : router.push('/');
        // 登录成功提示
        setTimeout(() => {
          // 关闭 loading
          state.loading.signIn = true;
          ElMessage.success('登录成功！');
          // 修复防止退出登录再进入界面时，需要刷新样式才生效的问题，初始化布局样式等(登录的时候触发，目前方案)
          proxy.mittBus.emit('onSignInClick');
        }, 300);
      };

      return {
        onSignIn,
        ...toRefs(state)
      };
    }
  });
</script>

<style scoped lang="scss">
  .login-container {
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    .login-content {
      width: 500px;
      padding: 20px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) translate3d(0, 0, 0);
      background-color: rgba(255, 255, 255, 0.99);
      // border: 5px solid var(--color-primary-light-8);
      border-radius: 4px;
      transition: height 0.2s linear;
      height: 480px;
      overflow: hidden;
      z-index: 1;
      .login-content-main {
        margin: 0 auto;
        width: 80%;
        .login-content-form {
          margin-top: 20px;
          .login-content-password {
            display: inline-block;
            width: 25px;
            cursor: pointer;
            &:hover {
              color: #909399;
            }
          }
          .login-content-code {
            display: flex;
            align-items: center;
            justify-content: space-around;
            .login-content-code-img {
              width: 100%;
              height: 40px;
              line-height: 40px;
              background-color: #ffffff;
              border: 1px solid rgb(220, 223, 230);
              color: #333;
              font-size: 16px;
              font-weight: 700;
              letter-spacing: 5px;
              text-indent: 5px;
              text-align: center;
              cursor: pointer;
              transition: all ease 0.2s;
              border-radius: 4px;
              user-select: none;
              &:hover {
                border-color: #c0c4cc;
                transition: all ease 0.2s;
              }
            }
          }
          .login-content-submit {
            width: 100%;
            letter-spacing: 2px;
            font-weight: 300;
            margin-top: 15px;
          }
        }
      }
    }
  }
</style>
