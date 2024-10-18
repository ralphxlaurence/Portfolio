<template>
  <div class="container">
    <h2>My Projects</h2>
    <div class="row">
      <div class="col-md-4" v-for="project in projects" :key="project.id">
        <div class="card">
          <img :src="project.image" class="card-img-top" alt="Project Image">
          <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <a :href="project.link" class="btn btn-primary">View Project</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioPage",
  data() {
    return {
      projects: [
        { id: 1, title: "Project 1", description: "Description of project 1", image: "/img/project1.jpg", link: "#"},
        { id: 2, title: "Project 2", description: "Description of project 2", image: "/img/project2.jpg", link: "#"},
      ],
    };
  },
};
</script>

<style scoped>
.card-img-top {
  height: 200px;
  object-fit: cover;
}
</style>
