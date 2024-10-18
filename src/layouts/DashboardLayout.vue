<template>
  <div class="app-container">
    <!-- Main Content -->
    <main class="content">
      <div class="dashboard-content">
        <h1 class="title">Welcome, I'm Ralph!</h1>
        <p class="subtitle">A Computer Engineering Student from TIPM</p>
        
        <!-- Welcome Section -->
        <div class="welcome-section">
          <p class="welcome-description">
            Have a surface dive about me by strolling here in my Web App. Feel free to look here! I'll update something of me if I will have new discoveries/achievements all throughout my journey. :>
          </p>
          <button class="know-more-button" @click="goToProfile">Know Me More!</button> <!-- Updated button -->
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    goToProfile() {
      this.$router.push({ name: 'Profile' }); // Redirect to ProfilePage
    },
  },
}
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: url('@/assets/bg.png') no-repeat center center fixed; /* Use bg.png as background */
  background-size: cover; /* Ensure the image covers the entire container */
  color: white;
  font-family: 'Arial', sans-serif;
}

.content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5); /* Added a darker overlay for better contrast */
  backdrop-filter: blur(5px); /* Blur effect for background */
  transition: background-color 0.5s; /* Smooth transition for background */
}

.dashboard-content {
  text-align: center;
  padding: 40px 30px; /* Increased padding for larger space */
  background: rgba(0, 0, 0, 0.7); /* Dark semi-transparent background for better contrast */
  border-radius: 20px; /* More rounded corners */
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.7); /* Enhanced shadow for depth */
  transform: translateY(-20px); /* Slightly lift the content */
  animation: slideIn 0.8s ease-out forwards; /* Slide-in effect for content */
}

.title {
  font-size: 56px; /* Increased font size */
  margin-bottom: 15px;
  color: #00c8ff; /* Light blue techy color */
  font-weight: 700; /* Increased font weight */
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.6); /* Enhanced text shadow for depth */
}

.subtitle {
  font-size: 24px; /* Increased font size */
  margin-bottom: 40px;
  color: #a0aec0; /* Softer gray text */
}

/* Welcome Section Styles */
.welcome-section {
  display: flex;
  flex-direction: column; /* Stack elements vertically */
  align-items: center;
  margin-top: 30px; /* Space above the description */
}

.welcome-description {
  font-size: 20px; /* Increased font size */
  margin-bottom: 25px; /* Space below the description */
  color: #a0aec0; /* Softer gray text */
  max-width: 800px; /* Increased max-width for better readability */
  line-height: 1.6; /* Improved line spacing */
  text-align: center; /* Center the text */
  animation: fadeIn 1s; /* Fade-in effect for description */
}

.know-more-button {
  padding: 15px 30px; /* Increased button size */
  border: none;
  border-radius: 10px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  font-size: 20px; /* Increased font size */
  transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s; /* Enhanced transitions */
  animation: bounceIn 1s; /* Bounce-in effect for button */
}

.know-more-button:hover {
  background-color: #0056b3;
  transform: scale(1.05); /* Slightly enlarge button on hover */
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5); /* Shadow effect on hover */
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounceIn {
  from {
    transform: scale(0.5);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .welcome-section {
    padding: 0 15px; /* Padding on smaller screens */
  }
}
</style>
