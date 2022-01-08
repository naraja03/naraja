<template>
<div class="authPage">
  <div class="auth">
    <h1 >SIGN IN</h1>

    <form class="authForm" @submit.prevent="Login">
      <input
        type="text"
        name="email"
        id="email"
        autocomplete="off"
        placeholder="Mail"
        v-model="email"
      />
      <input
        type="password"
        name="email"
        id="pass"
        autocomplete="off"
        placeholder="PassWord"
        v-model="password"
      />
      <input type="submit" value="Login" />
    </form>
    <div class="authButton">Need Account <router-link to="/signup">SignUp</router-link></div>
  </div>

</div>
</template>

<script>
import { ref } from "vue";
import firebase from "firebase/compat/app";
require("firebase/compat/auth");
export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const Login = () => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then((data)=> console.log(data))
        .catch((err) => alert(err.message));
    };
    return {
      Login,
      email,
      password,
    };
  },
};
</script>