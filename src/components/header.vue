<template>
  <el-col :span="24">
    <h1>Music Player</h1>
    <el-col :span="8" class="user">
      <el-link :underline="false" @click="dialogFormVisible=true">Login</el-link>
      <el-dialog title="登录" :visible.sync="dialogFormVisible" width="30%">
        <el-form :model="form" :inline="true">
          <el-form-item label="手机号码" :label-width="formLabelWidth">
            <el-input v-model="form.phone" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="send()">发送验证码</el-button>
          </el-form-item>
          <el-form-item label="验证码" :label-width="formLabelWidth">
            <el-input v-model="form.captcha" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="verify(),dialogFormVisible = false">登录</el-button>
        </div>
      </el-dialog>
    </el-col>
  </el-col>
</template>
<script>
import { sendcaptcha, verifycaptcha, loginstatus, refreshstatus } from "../api/index";
export default {
  data() {
    return {
      dialogFormVisible: false,
      form: {
        phone: '',
        captcha: '',
      },
      formLabelWidth: '120px'
    }
  },
  methods: {
    send() {
      let params = {
        phone: this.form.phone
      }
      sendcaptcha(params).then(res => {
        let {status,data,message}=res
        if (status == 200) {
          this.$message({
            message: '验证码发送成功',
            type: 'success'
          })
        } else {
          this.$message({
            message: '验证码发送失败',
            type: 'warning'
          })
        }
      })
    },
    verify() {
      let params = {
        phone: this.form.phone,
        captcha: this.form.captcha
      }
      verifycaptcha(params).then(res => {
        let {status,data,message}=res
        if (status == 200) {
          console.log(res)
          this.$message({
            message: '登录成功',
            type: 'success'
          })
          refreshstatus({})
          loginstatus({}).then(res => {
            console.log(res)
          })
        } else {
          this.$message({
            message: '验证码发送失败',
            type: 'warning'
          })
        }
      })
    }
  }
};

</script>
<style lang="less">
h1 {
  color: #fff;
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

  .el-dialog {
    text-align: left;
  }
}

</style>
