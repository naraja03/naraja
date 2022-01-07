import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './services/style.css';
import firebase from 'firebase/compat/app';


const firebaseConfig = {
    apiKey: "AIzaSyCmaa2FhLnS7GLImmWvBYhEd0RS1afPPFM",
    authDomain: "naraja-portfolio.firebaseapp.com",
    projectId: "naraja-portfolio",
    storageBucket: "naraja-portfolio.appspot.com",
    messagingSenderId: "619961064417",
    appId: "1:619961064417:web:cff2d5f829b0c4524710a0"
  };

firebase.initializeApp(firebaseConfig);
createApp(App).use(router).mount('#app')
