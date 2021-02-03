<template>
  <div class="login-container">
    <div class="login-box">
      <div class="avatar-box">
        <span>OurBlog</span>
      </div>
      <div class="login-title">登录后台</div>
      <el-form class="login-form" ref="loginFormRef" :model="loginForm" :rules="loginRules">
        <el-form-item prop="loginName">
          <el-input
            placeholder="用户名"
            prefix-icon="el-icon-user-solid"
            v-model="loginForm.loginName"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            placeholder="密码"
            prefix-icon="el-icon-lock"
            type="password"
            v-model="loginForm.password"
          />
        </el-form-item>
        <el-form-item class="btn">
          <el-button type="primary" @click="$router.push('/index')">立即登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        loginName: 'chenpeng',
        password: '123456',
      },
      loginRules: {
        loginName: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          {
            min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur',
          },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur',
          },
        ],
      },
    };
  },
  methods: {
    /*login() {
      this.$refs.loginFormRef.validate((valid) => {
        if (valid) {
          login(this.loginForm).then((res) => {
            console.log(res);
            if (res.code === 2000) {
              sessionStorage.setItem('bid', res.data);
              this.$router.push('/business/index');
              this.$message({
                type: 'success',
                message: '登录成功',
              });
            } else {
              this.$message({
                type: 'warning',
                message: '账号或密码错误，请重新输入',
              });
            }
          });
        }
      });
    },*/
  },
};
</script>

<style lang="less" scoped>
@font-face {
  font-family: tttgbnumber;
  src: url("../../assets/fonts/tttgbnumber.eot") format("embedded-opentype"),
  url('../../assets/fonts/tttgbnumber.ttf') format("truetype"),
  url('../../assets/fonts/tttgbnumber.woff') format("woff");
}
.login-container{
  background-color: #f4f4f4;
  width: 100vw;
  height: 100vh;
  .login-box{
    width: 450px;
    height: 350px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 1px 1px rgba(0,0,0,.05);
    .avatar-box{
      width: 110px;
      height: 110px;
      line-height: 110px;
      text-align: center;
      border: 1px solid #eee;
      border-radius: 50%;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 10px;
      background-color: #fff;
      box-shadow: 0 0 10px #ddd;
      img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eee;
      }
      span{
        font-family: tttgbnumber,serif;
        font-size: 28px;
        color: #2d8cf0;
      }
    }
    .login-form{
      position: absolute;
      bottom: 5px;
      width: 100%;
      padding: 0 20px;
      box-sizing: border-box;
      .btn{
        width: 100%;
        text-align: center;
        .el-button{
          width: 100%;
        }
      }
      .link{
        padding-bottom: 20px;
        text-align: center;
      }
    }
    .login-title{
      width: 100%;
      text-align: center;
      color: #333;
      position: absolute;
      top: 90px;
      font-size: 25px;
    }
  }
}
</style>
