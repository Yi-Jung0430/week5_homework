//載入多國語系
import zh from './zh_TW.js';

// 自定義設定檔案，驗證錯誤 會帶出的 className
VeeValidate.configure({
    classes: {
        valid: 'is-valid',
        invalid: 'is-invalid',
    },
});

// 載入自訂規則包
VeeValidate.localize('tw', zh);

//註冊全域的表單驗證元件(input)
Vue.component('ValidationProvider', VeeValidate.ValidationProvider);

//註冊全域的表單驗證元件(form)
Vue.component('ValidationObserver', VeeValidate.ValidationObserver);

new Vue({
    el:'#app',
    data: {
        form: {
            name:'',
            email:'',
            tel:'',
            address:'',
            payment:'',
            message:'',
        },
        user: {
            uuid:'36ef9eb4-b4df-4e7f-beae-46ff1b4c8cdd',
            apiPath:'https://course-ec-api.hexschool.io',
        }
    }
})