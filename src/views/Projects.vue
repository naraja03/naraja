<template>
  <div class="projectPage">
    <h1 class="project_heading">My Projects</h1>
    <div class="project_nav">
      <div class="basic navItems" @click="basic"><h4>Basic</h4></div>
      <div class="intermediate navItems"><h4>Intermediate</h4></div>
      <div class="advanced navItems"><h4>Advanced</h4></div>
    </div>
    <div class="projects">
      <router-link to="/countdown">
      <div class="project txt">COUNTDOWN</div>
      </router-link>
      <router-link to="/todo">
      <div class="project txt">TODO</div>
      </router-link>
      <router-link to="/calculator">
      <div class="project txt">CALCULATOR</div>
      </router-link>
      <router-link to="/weather">
      <div class="project txt">WEATHER</div>
      </router-link>
    </div>
  </div>
</template>

