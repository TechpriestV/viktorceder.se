<template lang="html">
  <div id="projects">
    <Project v-for="prj in myProjects" :key="prj.name" :projectData="prj">
      <!-- <Project :projectData="prj"/> -->
    </Project>
  </div>
</template>

<script>
import data from '@/assets/projects.json'
import Project from '@/components/Project.vue'

export default {
  data(){
    return{
      myProjects: data
    }
  },
  components:{
    Project,
  }
}
</script>

<style lang="css">
  #projects{
    margin: 100px;
  }
</style>
