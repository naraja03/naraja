<template>
  <div class="projectPage">
    <h1 class="project_heading">My Projects</h1>
    <div class="project_nav">
      <div class="basic navItems"><h4>Basic</h4></div>
      <div class="intermediate navItems"><h4>Intermediate</h4></div>
      <div class="advanced navItems"><h4>Advanced</h4></div>
    </div>
    <div class="projects">
      <div class="project" v-for="project in projects" :key="project">
        {{projects.Basic}}
      </div>
    </div>
  </div>
</template>
