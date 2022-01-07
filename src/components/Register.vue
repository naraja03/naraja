<template>
  <div class="register">
    <h1>REGISTER PAGE</h1>

    <form class="login" @submit.prevent="register">
      <input
        type="text"
        name="email"
        id="email"
        autocomplete="off"
        placeholder="Mail"
        v-model="email"
      />
      <br />
      <input
        type="password"
        name="email"
        id="pass"
        autocomplete="off"
        placeholder="PassWord"
        v-model="password"
      />
      <br />
      <input type="submit" value="Register" />
    </form>
    <div>
      Have Account <router-link to="/login">Login</router-link>
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