<template>
  <div class="container">
    <h2 class="page-title">My Hobbies</h2>
    <div class="hobbies-grid">
      <div class="hobby" v-for="hobby in hobbies" :key="hobby.id">
        <img :src="hobby.image" alt="Hobby Image" class="hobby-img" />
        <div class="hobby-description">
          <h4>{{ hobby.title }}</h4>
          <p>{{ hobby.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreativePage",
  data() {
    return {
      hobbies: [
        {
          id: 1,
          title: "Play Volleyball",
          description: "I enjoy playing volleyball during my free time. It's a great way to stay active and socialize with friends.",
          image: require("@/assets/volleyball.jpg"),
        },
        {
          id: 2,
          title: "Play Online Games",
          description: "I love playing online games like League of Legends and Valorant. They challenge my strategic thinking and teamwork skills.",
          image: require("@/assets/online-games.jpg"),
        },
        {
          id: 3,
          title: "Watching Anime and Movies",
          description: "I enjoy immersing myself in different worlds through anime and movies. It inspires my creativity and storytelling.",
          image: require("@/assets/anime-movies.jpg"),
        },
        {
          id: 4,
          title: "Listen to Music",
          description: "Music is a big part of my life. I love exploring different genres and discovering new artists that inspire me.",
          image: require("@/assets/music.jpg"),
        },
        {
          id: 5,
          title: "Play Bass Instrument",
          description: "Playing the bass instrument allows me to express myself musically and adds depth to the music I love.",
          image: require("@/assets/instrument.jpg"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px; /* Max width for larger screens */
  margin: 20px auto; /* Center the container */
  padding: 20px; /* Add padding */
  background-color: #444; /* Dark background for better contrast */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); /* Subtle shadow */
}

.page-title {
  text-align: center; /* Center the title */
  color: #00c8ff; /* Light blue color for the title */
  margin-bottom: 30px; /* Space below the title */
}

.hobbies-grid {
  display: grid; /* Use CSS grid for layout */
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Responsive grid */
  gap: 20px; /* Space between items */
}

/* Center the last two hobbies when they are in a row */
.hobbies-grid .hobby:nth-last-child(2) {
  grid-column: span 2; /* Span two columns for the second last item */
  justify-self: center; /* Center it */
}

.hobby {
  background-color: #555; /* Card background */
  border-radius: 10px; /* Rounded corners */
  overflow: hidden; /* Clip overflow */
  transition: transform 0.3s; /* Smooth transition for hover effect */
}

.hobby:hover {
  transform: scale(1.05); /* Scale effect on hover */
}

.hobby-img {
  width: 100%; /* Full width for images */
  height: auto; /* Maintain aspect ratio */
  max-height: 200px; /* Maximum height to keep uniformity */
  object-fit: cover; /* Cover to fill the space without distortion */
}

.hobby-description {
  padding: 15px; /* Padding around the text */
  color: white; /* White text for description */
}

.hobby-description h4 {
  margin: 0; /* Remove default margin */
  color: #00c8ff; /* Light blue color for headings */
}

.hobby-description p {
  margin-top: 5px; /* Space above the paragraph */
  line-height: 1.5; /* Improve readability */
}
</style>
