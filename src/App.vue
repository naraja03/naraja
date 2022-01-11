<template>
<div class="appPage">

  <div id="nav">
    <NavBar v-if='this.$route.path !== "/signin" && this.$route.path !== "/signup"' />
  </div>
  <router-view/>
</div>
<div class="loader"><Loader /></div>
</template>

<script>
import firebase from 'firebase/compat/app';
require('firebase/compat/auth');
import {useRouter, useRoute } from 'vue-router';
import NavBar from './components/NavBar.vue';
import { onBeforeMount } from 'vue';
import Loader from './components/Loader.vue'

export default {
  components:{
    NavBar,
    Loader,
  },
  setup(){

    const router = useRouter();
    const route = useRoute();

    onBeforeMount(()=>{
      firebase.auth().onAuthStateChanged((user) => {
        if(!user){
          router.replace('/signin');
        } else if(route.path=='/signin' || route.path=='/signup'){
          router.replace('/');
        }
      });
    });
  },
};
</script>
