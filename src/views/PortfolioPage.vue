<template>
  <div class="container">
    <h2>My Projects</h2>
    <div class="row justify-content-center"> <!-- Center the row -->
      <div class="col-md-6 col-lg-4" v-for="project in projects" :key="project.id">
        <div class="card individual-card"> <!-- Individual card class for styling -->
          <img :src="project.image" class="card-img-top" alt="Project Image">
          <div class="card-body d-flex flex-column"> <!-- Use flex to position button -->
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <div class="mt-auto"> <!-- Push the button to the bottom -->
              <a :href="project.link" class="btn btn-primary" target="_blank">View Project on GitHub</a>
            </div>
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
        {
          id: 1,
          title: "Care Companion",
          description: "A healthcare project designed to assist with patient management.",
          image: require("@/assets/CareCompanion.jpg"), // Reference your image from assets
          link: "https://github.com/ralphxlaurence/Final-Proj" // Link to GitHub project
        },
        {
          id: 2,
          title: "Admin Dashboard",
          description: "An intuitive admin dashboard for managing data and users.",
          image: require("@/assets/AdminDashboard.jpg"), // Reference your image from assets
          link: "https://github.com/ralphxlaurence/Final-Proj" // Link to GitHub project
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  padding: 30px; /* Increased padding for more space */
  background-color: #181818; /* Dark background color for the container */
  color: #ffffff; /* White text color */
}

h2 {
  text-align: center; /* Center the title */
  margin-bottom: 40px; /* Add space below the title */
  color: #00c8ff; /* Light blue color for the title */
}

.row {
  margin: 0; /* Remove default margin */
}

.card {
  height: 100%; /* Ensure cards stretch to the full height of their parent */
  margin-bottom: 30px; /* Space between rows of cards */
  border: 1px solid #444; /* Darker border for the card */
  border-radius: 10px; /* Rounded corners for cards */
  transition: transform 0.3s, box-shadow 0.3s; /* Add transition effects */
  background-color: rgba(34, 34, 34, 0.8); /* Dark background for the card with reduced opacity */
  color: #ffffff; /* White text inside the card */
}

.card:hover {
  transform: translateY(-5px); /* Lift effect on hover */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5); /* Shadow effect on hover */
}

.card-img-top {
  height: 250px; /* Increased height for project images */
  object-fit: cover;
  border-top-left-radius: 10px; /* Round the corners of the image */
  border-top-right-radius: 10px; /* Round the corners of the image */
}

.card-body {
  padding: 20px; /* More padding inside the card */
  display: flex;
  flex-direction: column; /* Use column layout for card body */
}

.card-title {
  font-size: 1.5rem; /* Larger title font size */
  margin-bottom: 10px; /* Add space below the title */
  color: #00c8ff; /* Light blue color for the title */
}

.card-text {
  font-size: 1rem; /* Increased font size for description */
  flex-grow: 1; /* Allow text to grow */
}

.btn {
  width: 100%; /* Make button full width */
  background-color: #007bff; /* Button background color */
  border: none; /* Remove default border */
  transition: background-color 0.3s; /* Smooth background color change */
}

.btn:hover {
  background-color: #0056b3; /* Darker blue on hover */
  transform: scale(1.05); /* Slightly enlarge button on hover */
}
</style>
