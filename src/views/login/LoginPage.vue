<script setup lang="ts">
import { reactive } from 'vue';
import {login} from '../../api/user';
import { useRouter } from 'vue-router';
import store from 'store';
interface FormState {
  username: string;
  password: string;
  remember: boolean;
  loading:boolean;
}

const router = useRouter();

const formState = reactive<FormState>({
  username: '',
  password: '',
  remember: true,
  loading:false,
});

const onFinish = (values: any) => {
    formState.loading = true;
    console.log('Success:', values);
    login(values.username, values.password).then((res)=>{
        router.push({path:'/'})
        formState.loading = false;
        debugger;
        store.set("token", res.token)
    }).catch(()=>{
        formState.loading = false;
    })
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

</script>
<template>
    <div class="login-page full-height">
        <div class="login-page_title">
            临城县经济开发区区域地震安全性评价
        </div>
        <a-form
            :model="formState"
            class="login_form"
            @finish="onFinish"
            @finishFailed="onFinishFailed">
            <a-form-item
                name="username">
                <a-input    
                    placeholder="请输入用户名"
                    v-model:value="formState.username">
                </a-input>
            </a-form-item>
            <a-form-item
                name="password">
                <a-input    
                    placeholder="请输入密码"
                    type="password"
                    v-model:value="formState.password">
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-button
                    class="login_button"
                    type="primary"
                    html-type="submit"
                    :loading="formState.loading"
                    >
                    登录
                </a-button>
            </a-form-item>
        </a-form>
    </div>
    
</template>
<style lang="scss">
.login-page{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('../../assets/TVYTbAXWheQpRcWDaDMu.ebcb916068d431662f5b.svg');
}
.login-page .login-page_title{
    color: rgba(0,0,0,.85);
    font-weight: 600;
    font-size: 33px;
    margin-bottom: 32px;
}
.login_form{
    width: 320px;
    text-align: center;
    .login_button{
        width: 100%;
    }
}
</style>