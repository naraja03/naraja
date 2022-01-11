<template>
<div class="authPage">
  <div class="auth">
    <h1 >CREATE POST</h1>

    <form class="authForm" @submit.prevent="CreatePost()">
      <input
        type="text"
        name="email"
        id="email"
        autocomplete="off"
        placeholder="Project Name"
        v-model="projectTitle"
      />
      <input
        type="text"
        name="email"
        id="pass"
        autocomplete="off"
        placeholder="Description"
        v-model="projectDetail"
      />
      <input type="submit" value="SUBMIT" />
    </form>
  </div>

</div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
export default {
    setup() {
        const projectTitle = ref([]);      
        const projectDetail = ref([]);
        
        const CreatePost = ()=>{
            axios
                .post('https://jsonplaceholder.typicode.com/users/1/posts', {
                    title:projectTitle.value,
                    body: projectDetail.value
                })
                .then(response =>{
                    console.log(response);
                })
        }

        return{
            projectTitle,
            projectDetail,
            CreatePost,
        }
    },
}
</script>