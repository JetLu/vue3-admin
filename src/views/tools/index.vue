<template>
  <el-card shadow="hover" header="正则验证（一些项目中常用的正则）">
    <el-form :model="ruleForm" :rules="rules" class="tools-warp-form" size="small" label-position="top">
      <el-form-item label="小数或整数:" prop="a1">
        <div class="tools-warp-form-msg">
          验证可以输入小数或整数，0 开始， . 只能出现一次，保留小数点后保留2位小数。(负数时，模拟拼接负号给后台)。
        </div>
        <div>
          <el-input
            v-model="ruleForm.a1"
            placeholder="请输入小数或整数进行测试"
            @input="onVerifyNumberIntegerAndFloat($event)"
          />
        </div>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script lang="ts">
  import { reactive, toRefs } from 'vue';
  import { verifyNumberIntegerAndFloat } from '@/utils/toolsValidate';

  export default {
    name: 'Tools',
    setup() {
      const state = reactive({
        text: '世间美好，与你环环相扣，祝你开心每一天！',
        phone: '',
        cnText: '',
        telePhone: '',
        account: '',
        password: '',
        passwordPowerful: '',
        passwordStrength: '',
        iPAddress: '',
        email: '',
        idCard: '',
        fullName: '',
        postalCode: '',
        url: '',
        carNum: '',
        /**
         * 变量名为了方便，随便取了，
         * 实际中，按正常程序进行命名
         */
        ruleForm: {
          a1: '',
          a2: '',
          a3: '',
          a4: ''
        },
        rules: {
          a1: [
            {
              required: true,
              message: '请输入小数或整数进行测试',
              trigger: 'change'
            }
          ]
        }
      });
      // 小数或整数
      const onVerifyNumberIntegerAndFloat = (val: string) => {
        state.ruleForm.a1 = verifyNumberIntegerAndFloat(val);
      };

      return {
        onVerifyNumberIntegerAndFloat,
        ...toRefs(state)
      };
    }
  };
</script>

<style scoped lang="scss">
  .tools-warp-form {
    ::v-deep(.el-form-item--small.el-form-item) {
      margin-bottom: 0 !important;
    }
    .tools-warp-form-msg {
      color: #666666;
      font-size: 14px;
      .tools-warp-form-msg-red {
        color: red;
      }
    }
  }
</style>
