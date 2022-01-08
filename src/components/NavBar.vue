<template>
<div class="nav">
    <ul class="navigation">
        <li class="name me">
            <router-link to="/"><h2>naRaja</h2></router-link>
        </li>
        <li class="iam me"><h6>Web Developer</h6></li>
        
        <li class="home nav_item"><router-link to="/">HOME</router-link></li>
        
        
        <li class="about nav_item"><router-link to="/about">ABOUT</router-link></li>
        
        
        <li class="projects nav_item"><router-link to="/projects">PROJECTS</router-link></li>
        
        
        <li class="skills nav_item"><router-link to="/">SKILLS</router-link></li>
        
        
        <li class="contactUs nav_item"><router-link to="/">CONTACT US</router-link></li>

        <li class="logOut nav_item" @click="Logout">LOGOUT</li>
        
        <li class="socialMedia">
            <div class="social_link">Linkdin</div>
            <div class="social_link">github</div>
            <div class="social_link">Twitter</div>
        </li>
    </ul>
</div>
</template>

<script>
import { ref, onBeforeMount } from 'vue';
import firebase from 'firebase/compat/app';
require('firebase/compat/auth')
export default {
	setup() {
		const name = ref("");
		onBeforeMount(()=>{
			const user = firebase.auth().currentUser;
			if(user){
				name.value = user.email.split('@')[0];
				console.log(name.value);
			}
		})
		const Logout = ()=> {
			console.log(firebase.auth().currentUser);
			firebase
				.auth()
				.signOut()
				.then(console.log("You Are Successfully LoggedOut"))
				.catch(err => alert(err.message))
		}
		return{
			name,
			Logout,
		}
	},
}
</script>