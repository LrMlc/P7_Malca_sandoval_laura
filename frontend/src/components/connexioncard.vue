<template>
  <div class="card">
    <h1 class="card-title" v-if="mode == 'login'">Connexion</h1>
    <h1 class="card-title" v-else>Inscription</h1>
    <p class="card-subtitle" v-if="mode == 'login'">
      Tu n'as pas de compte?<span
        class="card-create-account"
        @click="switchToCreateAccount()"
        >Créer un compte</span>
    </p>
    <p class="card-subtitle" v-else>
      Tu as déjà un compte<span
        class="card-create-account"
        @click="switchToLogin()"
        >Se connecter</span>
    </p>
    <div class="login-form">
      <input
        v-model="nickname"
        class="form-row-input"
        type="text"
        placeholder="nickname"
      />
    </div>
    <div class="login-form">
      <input
        v-model="password"
        class="form-row-input"
        type="password"
        placeholder="password"
      />
    </div>
    <div class="login-form">
      <button
        @click="loginAccount()"
        class="btn"
        :class="{ 'login-btndisable': !filledFields }"
        v-if="mode == 'login'"
      >
        Connexion
      </button>
      <button
        @click="createAccount()"
        class="btn"
        :class="{ 'submit-btndisable': !filledFields }"
        v-else
      >
        Créer un compte
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "connexioncard",
  data: function () {
    return {
      mode: "login",
      nickname: "",
      password: "",
    };
  },
  computed: {
    filledFields() {
      if (this.nickname != "" && this.password != "") {
        return true;
      } else {
        return false;
      }
    },
  },

  methods: {
    switchToCreateAccount: function () {
      this.mode = "create";
    },
    switchToLogin: function () {
      this.mode = "login";
    },
    createAccount: function () {
      /*this.$store.dispatch('createAccount',{
                nickname: this.nickname,
                password: this.password,
            })*/
      axios
        .post("http://localhost:3000/api/user/signup", {
          pseudo: this.nickname,
          password: this.password,
        })
        .then((response) => {
          console.log(response.data);
          this.switchToLogin();
        });
    },
    loginAccount: function () {
      axios
        .post("http://localhost:3000/api/user/login", {
          pseudo: this.nickname,
          password: this.password,
        })
        .then((response) => {
          console.log(response.data);
          //stocker l'id, le token et le user name.
          localStorage.setItem("token", response.data.token);
          this.$router.push("/home");
        });
    },
  },
};
</script>

<style scoped>
.card {
  max-width: 100%;
  width: 540px;
  background: white;
  border-radius: 16px;
  padding: 32px;
}
.card-title {
  text-align: center;
  font-weight: 800;
}
.card-subtitle {
  text-align: center;
  color: #666;
  font-weight: 500;
}
button {
  background: #2196f3;
  color: white;
  border-radius: 8px;
  font-weight: 800;
  font-size: 15px;
  border: none;
  width: 100%;
  padding: 16px;
  transition: 0.4s background-color;
}
.card-create-account {
  color: #2196f3;
  text-decoration: underline;
}
.card-create-account:hover {
  cursor: pointer;
}
button:hover {
  cursor: pointer;
  background: #1976d2;
}
button.login-btndisable,
button.submit-btndisable {
  background: #cecece;
  color: #ececec;
}
</style>
