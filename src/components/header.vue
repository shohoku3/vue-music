<template>
  <el-col :span="24">
    <h1>Music Player</h1>
    <el-col :span="16"></el-col>
    <el-col :span="8" class="user">
      <el-link :underline="false" @click="open">Login</el-link>
    </el-col>
  </el-col>
</template>
<script>
import { sendcaptcha, verifycaptcha } from "../api/index";
export default {
  methods: {
    open() {
      this.$prompt("请输入手机", "登录", {
        confirmButtonText: "发送验证码",
        cancelButtonText: "取消",
        inputErrorMessage: "手機格式不正确"
      })
        .then(({ value }) => {
          let params = {
            phone: value
          };
          sendcaptcha(params).then(res => {
            if (res.code == 200) {
              this.$message({
                type: "success",
                message: "发送验证码成功"
              });
            } else {
              
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
    }
  }
};
</script>
<style lang="less">
h1 {
  color: #333;
  line-height: 60px;
  margin: 0;
}
.user {
  position: absolute;
  top: 15px;
  right: 40px;
  line-height: 30px;
  text-align: right;
  cursor: pointer;
}
</style>