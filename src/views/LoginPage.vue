<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          id="username"
          v-model="username"
          required
          placeholder="Enter your username"
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          v-model="password"
          required
          placeholder="Enter your password"
        />
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginPage', // Multi-word component name
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    handleLogin() {
      // Hardcoded username and password
      const hardcodedUsername = 'ralph';
      const hardcodedPassword = 'ralph';

      if (this.username === hardcodedUsername && this.password === hardcodedPassword) {
        // Redirect to the dashboard after successful login
        this.$router.push('/dashboard');
      } else {
        // Handle login failure (e.g., show an error message)
        alert('Invalid username or password');
      }
    },
  },
}
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #333; /* Dark background */
  color: white; /* White text */
}

.form-group {
  margin-bottom: 15px;
  width: 300px;
}

input {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff; /* Primary color */
  color: white; /* White text */
  cursor: pointer;
}

button:hover {
  background-color: #0056b3; /* Darker shade on hover */
}
</style>
