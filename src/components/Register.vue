<template>
<div class="authPage">
  <div class="auth">
    <h1>SIGN UP</h1>

    <form class="authForm" @submit.prevent="register">
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
      <input type="submit" value="Register" />
    </form>
    <div class="authButton">
      Have Account <router-link to="/signin">SignIn</router-link>
    </div>
  </div>
</div>
</template>

<script>
import { ref } from 'vue';
import firebase from 'firebase/compat/app';

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const register = ()=> {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then((user) => alert(user))
        .catch(err => alert(err.message));
    }
    return{
      register,
      email,
      password,
    }
  },
}
</script>