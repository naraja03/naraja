<template>
<div class="appPage">
  <div id="nav">
    <NavBar v-if='this.$route.path !== "/login" && this.$route.path !== "/register"' />
  </div>
  <router-view/>
</div>
</template>

<script>
import firebase from 'firebase/compat/app';
require('firebase/compat/auth');
import {useRouter, useRoute } from 'vue-router';
import NavBar from './components/NavBar.vue';
import { onBeforeMount } from 'vue';

export default {
  components:{
    NavBar,
  },
  setup(){

    const router = useRouter();
    const route = useRoute();

    onBeforeMount(()=>{
      firebase.auth().onAuthStateChanged((user) => {
        if(!user){
          router.replace('/login');
        } else if(route.path=='/login' || route.path=='/register'){
          router.replace('/');
        }
      });
    });
  },
};
</script>
