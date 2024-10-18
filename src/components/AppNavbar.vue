<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <div class="d-flex align-items-center">
        <router-link class="navbar-brand" to="/home">
          <i class="fas fa-microchip"></i> <!-- Computer engineering icon -->
        </router-link>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav me-auto"> 
            <li class="nav-item">
              <router-link class="nav-link" to="/home">
                <i class="fas fa-home"></i> Home 
              </router-link>
            </li>
            <li class="nav-item divider">|</li>
            <li class="nav-item">
              <router-link class="nav-link" to="/profile">
                <i class="fas fa-user"></i> Profile
              </router-link>
            </li>
            <li class="nav-item divider">|</li>
            <li class="nav-item">
              <router-link class="nav-link" to="/portfolio">
                <i class="fas fa-briefcase"></i> Portfolio
              </router-link>
            </li>
            <li class="nav-item divider">|</li>
            <li class="nav-item">
              <router-link class="nav-link" to="/creative">
                <i class="fas fa-paint-brush"></i> Creative 
              </router-link>
            </li>
            <li class="nav-item divider">|</li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">
                <i class="fas fa-envelope"></i> Contact
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="d-flex align-items-center">
        <button class="btn btn-outline-danger" @click="logout">Logout</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppNavbar",
  methods: {
    logout() {
      this.$emit('logout'); // Emit logout event to parent
    },
  },
};
</script>

<style scoped>
/* Center the navbar brand icon */
.navbar-brand {
  display: flex;
  justify-content: center; /* Center the icon */
  width: 100px; /* Set a fixed width for proper centering */
}

.navbar-brand i {
  font-size: 48px; /* Bigger icon */
  cursor: pointer;
}

/* Adjust nav-link icons */
.nav-link i {
  margin-right: 8px;
}

/* Style the dividers */
.divider {
  color: white;
  font-weight: bold;
  padding: 0 15px;
  display: inline-flex;
  align-items: center;
}

/* Left-aligned navbar links */
.navbar-nav {
  display: flex;
  align-items: center;
}

/* Hover effect with light theme */
.navbar-nav .nav-link {
  color: white;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.navbar-nav .nav-link:hover {
  background-color: #f8f9fa; /* Light background */
  color: #000; /* Dark text */
  border-radius: 5px; /* Slight rounded corners */
}

.nav-item {
  margin: 0 10px;
}

/* Adjust the entire navbar to center the icon */
.navbar {
  justify-content: space-between; /* Ensure space between left and right components */
}
</style>
