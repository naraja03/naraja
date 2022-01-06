<template>
<div class="appPage">
  <div id="nav">
    <NavBar />
  </div>
  <router-view/>
</div>
</template>

<script>
import NavBar from './components/NavBar.vue';
export default {
  components:{
    NavBar,
  },
  setup() {
  },
}
</script>
