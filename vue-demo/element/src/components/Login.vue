<template>
    <div class="login">
        <div class="container">
            <p class="title">后台管理系统</p>
            <div class="msg mt20">
                <el-input v-model="input" placeholder="请输入内容"></el-input>
            </div>
            <div class="msg mt20">
                <el-input v-model="password" placeholder="请输入密码"></el-input>
            </div>
            <div class="btn mt20">
                <el-button type="primary" v-on:click="login">登录</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data () {
        return {
            user:''
        }
    },
    method: {
        login () {
            if (this.user && this.password) {
                localStorage.setItem('userName')
            }
        }
    }
}
</script>
<style scoped>
    .login{
        width: 100%;
    }
    .container{
        width: 300px;
        border-radius: 4px;
        margin: 0 auto;
        box-shadow: 0 0 20px #cac6c6;
        padding: 50px;
        margin-top: 200px;
    }
    .title{
        font-size: 26px;
        font-weight: bold;
        color: #505458;
    }
    .btn button{
        width: 100%;
    }
    .mt20{
        margin-top: 20px;
    }
</style>
