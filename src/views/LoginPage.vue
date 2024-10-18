<template>
  <div class="login-container">
    <div class="login-card">
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="username">
            <i class="fas fa-user"></i> Username
          </label>
          <input
            type="text"
            id="username"
            v-model="username"
            required
            placeholder="Enter your username"
            @focus="inputFocus"
            @blur="inputBlur"
          />
        </div>
        <div class="form-group">
          <label for="password">
            <i class="fas fa-lock"></i> Password
          </label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            placeholder="Enter your password"
            @focus="inputFocus"
            @blur="inputBlur"
          />
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    handleLogin() {
      const hardcodedUsername = 'ralph';
      const hardcodedPassword = 'ralph';

      if (this.username === hardcodedUsername && this.password === hardcodedPassword) {
        localStorage.setItem('isLoggedIn', 'true');
        this.$emit('updateLoginStatus', true);
        this.$router.push('/home');
      } else {
        alert('Invalid username or password');
      }
    },
    inputFocus(event) {
      event.target.classList.add('focused');
    },
    inputBlur(event) {
      if (!event.target.value) {
        event.target.classList.remove('focused');
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #333;
}

.login-card {
  background-color: #444; /* Slightly lighter background for card effect */
  padding: 40px; /* Increased padding for a larger card */
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  color: white;
  width: 400px; /* Increased width for a larger card */
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.login-card:hover {
  transform: translateY(-5px); /* Elevate the card on hover */
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.5);
}

.form-group {
  margin-bottom: 25px; /* Increased margin for more spacing */
  position: relative; /* Position relative for icon placement */
}

label {
  display: flex;
  align-items: center;
  color: #bbb; /* Light gray label color */
  font-weight: 600; /* Slightly bolder labels */
  font-size: 18px; /* Increased font size for labels */
}

label i {
  margin-right: 12px; /* Increased space between icon and label text */
  font-size: 20px; /* Increased icon size */
}

input {
  width: 100%;
  padding: 12px; /* Increased padding for a larger input field */
  border: none;
  border-radius: 4px;
  background-color: #555; /* Dark input background */
  color: white;
  transition: border-color 0.3s;
  font-size: 16px; /* Increased font size for input fields */
}

input:focus {
  outline: none;
  background-color: #666; /* Change input background on focus */
  border-bottom: 2px solid #007bff; /* Highlight bottom border */
}

input.focused {
  background-color: #666; /* Keep background on focus */
}

button {
  width: 100%;
  padding: 12px; /* Increased padding for a larger button */
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  font-size: 16px; /* Increased font size for button */
  transition: background-color 0.3s, transform 0.2s; /* Add transform for button hover */
}

button:hover {
  background-color: #0056b3;
  transform: scale(1.05); /* Slightly enlarge button on hover */
}
</style>
