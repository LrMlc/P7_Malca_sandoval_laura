<template>
    <nav>
    <div class="card">
        <h1 class="card-title" v-if="mode == 'login'">Connexion</h1>
        <h1 class="card-title" v-else>Inscription</h1>
        <p class="card-subtitle" v-if="mode == 'login'">Tu n'as pas de compte?<span class="card-create-account" @click="switchToCreateAccount()">Créer un compte</span></p>
        <p class="card-subtitle" v-else>Tu as déjà un compte<span class="card-create-account" @click="switchToLogin()">Se connecter</span></p>
        <div class="login-form">
            <input v-model="nickname" class=" form-row-input" type="text" placeholder="nickname">
        </div>
        <div class="login-form">
            <input v-model="password" class=" form-row-input" type="text" placeholder="password">
        </div>
        <div class="login-form">
            <button class="login-btn-enable" v-if="mode== 'login'">
            Connexion
            </button>
            <button @click="createAccount()" class="btn" :class="{'submit-btn-enable' : !filledFields()}" v-else>
            Créer un compte
            </button>
        </div>
    </div>
<template>

<script>
export default {
    name: 'login',
    data: function (){
        return{
            mode: 'login',
            nickname:'',
            password:'',
        }
    },
    computed:{
        filledFields : function(){
            if(this.mode=='create'){
                if(this.nickname != "" && this.password != ""){
                    return true;
                } else {
                    return false;
                }
            }
        }
    },

    methods: {
        switchToCreateAccount: function(){
            this.mode = 'create';
        },
        switchToLogin: function(){
            this.mode = 'login';
        },
        createAccount: function(){
            this.$store.dispatch('createAccount',{
                nickname: this.nickname,
                password: this.password,
            })
        },
    }
}
</script>

<style scoped>
  .login-form {
    
  }
  .login-form-input {
    
  }
</style>