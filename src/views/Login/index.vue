<template>
  <div class="login">
    <div class="login-container">
      <h3>
        NIE ADMIN
      </h3>
      <el-form>
        <el-form-item label="">
          <el-input
            v-model="userInfo.name"
            prefix-icon="el-icon-user-solid">
          </el-input>
        </el-form-item>
        <el-form-item label="">
          <el-input type="password" v-model="userInfo.password">
            <i slot="prefix" class="el-icon-lock prefix-icon"></i>
          </el-input>
        </el-form-item>
        <el-button
          type="primary"
          class="login-btn"
          @click="handleLoginClick">登录</el-button>
      </el-form>
      <div class="tip">
        提示：用户名、密码不做校验。
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      userInfo: {
        name: 'nienie',
        password: '12345'
      }
    }
  },
  methods: {
    handleLoginClick() {
      this.$router.push('index');
    }
  },
}
</script>

<style lang="scss">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-image: url('../../assets/imgs/background.jpg');
  background-size: 100%;

  .login-container {
    width: 350px;
    padding: 25px;
    border-radius: 8px;
    background: #fff;
    text-align: center;
  }
  .el-form {
    margin-top: 25px;
    .prefix-icon {
      margin-left: 5px;
    }
  }
  .tip {
    color: #999;
    font-size: 10px;
    text-align: left;
  }
  .login-btn {
    width: 100%;
    margin-bottom: 20px;
  }
}
</style>