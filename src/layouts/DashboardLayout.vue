<template>
  <div class="app-container">
    <!-- Main Content -->
    <main class="content">
      <div class="dashboard-content">
        <h1 class="title">Welcome, I'm Ralph!</h1>
        <p class="subtitle">A Computer Engineering Student from TIPM</p>
        
        <!-- Add Computer Engineering theme cards -->
        <div class="card-container">
          <div class="card">
            <i class="fas fa-microchip card-icon"></i>
            <h2>Microcontroller Projects</h2>
            <p>Explore projects that integrate hardware and software to solve real-world problems.</p>
          </div>

          <div class="card">
            <i class="fas fa-laptop-code card-icon"></i>
            <h2>Software Engineering</h2>
            <p>Dive deep into C++, Python, and assembly languages to create optimized software.</p>
          </div>

          <div class="card">
            <i class="fas fa-network-wired card-icon"></i>
            <h2>Networking</h2>
            <p>Study communication protocols, network design, and cybersecurity to stay ahead in the digital age.</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #1b1e23 url('https://www.toptal.com/designers/subtlepatterns/patterns/dashed-bright.png'); /* Dark background with a circuit-style pattern */
  color: white;
  font-family: 'Arial', sans-serif;
  padding-top: 50px; /* Ensure proper spacing */
}

.content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: white;
}

.dashboard-content {
  text-align: center;
}

.title {
  font-size: 48px;
  margin-bottom: 10px;
  color: #00c8ff; /* Light blue techy color */
  font-weight: 600;
}

.subtitle {
  font-size: 22px;
  margin-bottom: 30px;
  color: #a0aec0; /* Softer gray text */
}

/* Card Styles */
.card-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
}

.card {
  background-color: #2d323b; /* Darker card background */
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  color: white;
  width: 300px;
  margin: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px); /* Subtle hover effect */
}

.card-icon {
  font-size: 48px;
  margin-bottom: 15px;
  color: #00c8ff; /* Techy icon color */
}

.card h2 {
  font-size: 24px;
  margin-bottom: 10px;
  color: #00c8ff; /* Light blue title */
}

.card p {
  font-size: 16px;
  color: #a0aec0; /* Softer gray text */
}

@media (max-width: 768px) {
  .card-container {
    flex-direction: column;
    align-items: center;
  }
}
</style>
