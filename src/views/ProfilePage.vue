<template>
  <div class="container">
    <h2 class="page-title">About Me</h2>
    <div class="profile-info">
      <img src="@/assets/1x1%20pic.jpg" alt="Profile Picture" class="profile-img" />
      <div class="profile-details">
        <h4>Ralph Laurence A. Batang</h4>
        <p><i class="fas fa-genderless icon"></i> <strong>Gender: </strong> Male</p>
        <p><i class="fas fa-calendar-alt icon"></i> <strong>Age: </strong> 21 years old</p>
        <p><i class="fas fa-birthday-cake icon"></i> <strong>Birthday: </strong> November 25, 2002</p>
        <p><i class="fas fa-map-marker-alt icon"></i> <strong>Address: </strong> San Juan, Taytay, Rizal</p>
        <p><i class="fas fa-school icon"></i> <strong>Current School: </strong> Technological Institute of the Philippines-Manila</p>
        <p><i class="fas fa-graduation-cap icon"></i> <strong>Year/Course: </strong> 4th Year Computer Engineering</p>
      </div>
    </div>
    <div class="about-me">
      <h4><i class="fas fa-user"></i> Bio:</h4>
      <p>
        Hi, I'm Ralph! I am a passionate Computer Engineering student. I enjoy exploring new technologies,
        working on projects that combine hardware and software, and continuously improving my skills in programming
        and cybersecurity.
      </p>
    </div>
    <div class="skills">
      <h4><i class="fas fa-tools"></i> Skills</h4>
      <div class="skill-container">
        <span class="skill-badge">C++</span>
        <span class="skill-badge">Python</span>
        <span class="skill-badge">Microcontrollers</span>
        <span class="skill-badge">Cybersecurity</span>
        <span class="skill-badge">Networking</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfilePage",
};
</script>

<style scoped>
.container {
  max-width: 800px; /* Limit the maximum width */
  margin: auto; /* Center the container */
  padding: 20px; /* Add padding around the container */
  background-color: #1b1e23; /* Background color for better contrast */
  border-radius: 8px; /* Rounded corners for the container */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Shadow for depth */
}

.page-title {
  text-align: center; /* Center the page title */
  color: #00c8ff; /* Light blue color for the title */
  margin-bottom: 30px; /* Space below the title */
}

.profile-info {
  display: flex;
  align-items: center; /* Align items vertically centered */
  margin-bottom: 30px; /* Space below the profile info */
}

.profile-img {
  width: 150px; /* Size of profile image */
  border-radius: 50%; /* Circular image */
  margin-right: 20px; /* Space between image and text */
  border: 3px solid #00c8ff; /* Add border to image */
}

.profile-details {
  color: white; /* Text color for details */
}

.profile-details p {
  display: flex;
  align-items: center; /* Align icon with text */
  margin: 15px 0; /* Space between each detail */
}

.profile-details i {
  margin-right: 20px; /* Increased space between icon and text */
  color: #00c8ff; /* Icon color */
}

.about-me {
  margin-bottom: 30px; /* Space below the about me section */
  color: white; /* Text color for the about me section */
}

.skills {
  color: white; /* Text color for the skills section */
}

.skill-container {
  display: flex; /* Flex container for skills */
  flex-wrap: wrap; /* Allow skills to wrap to the next line */
  gap: 10px; /* Space between skill badges */
}

.skill-badge {
  background-color: #00c8ff; /* Color of skill badges */
  color: white; /* Text color for skill badges */
  padding: 10px 15px; /* Padding for badges */
  border-radius: 5px; /* Rounded corners for badges */
  font-weight: bold; /* Bold text for badges */
  transition: background-color 0.3s; /* Transition for hover effect */
}

.skill-badge:hover {
  background-color: #0091b5; /* Darker shade on hover */
}
</style>
