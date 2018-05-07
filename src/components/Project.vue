<template lang="html">
  <div class="project">
    <div class="image">
      <!-- <img src="./assets/VEnterpriseRoundNoText.png" alt=""> -->
      <img :src="image" alt="Image Problems">
    </div>
    <div class="title">
      <h2>{{name}}</h2>
    </div>
    <div class="description">
      {{description}}
    </div>
  </div>
</template>

<script>
export default {
  props: ['projectData'],
  data(){
    return{
      name: this.projectData.name,
      link: this.projectData.link,
      // image: this.projectData.image,
      description: this.projectData.description
    }
  },
  computed: {
    image: function () {
      return require('@/assets/'+this.projectData.image+'.png')
    }
  }
}
</script>

<style lang="css">
  .project{
    padding: 100px 50px;
  }
  .image{
    float: left;
    width: 200px;
    height: 200px;
    overflow: hidden;
    position: relative;
  }
  img{
    position: absolute;
    top: -9999px;
    left: -9999px;
    right: -9999px;
    bottom: -9999px;
    margin: auto;
  }
  .description{

  }
  .name{
    text-align: left;
    float: left;
  }
</style>
