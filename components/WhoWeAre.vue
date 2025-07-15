<script setup>
const paragraph =
  "G-Tech (Generalize Technology) is the official Fine Arts Association of Guru Nanak College (GNC). We are a dynamic community of creators, innovators, and performers who believe in the power of combining art and technology to create meaningful experiences.";

const cards = [
  {
    icon: "brainpuzzle.svg",
    alt: "Brain Puzzle",
    text: "Foster creativity and innovation among students.",
  },
  {
    icon: "pallet.svg",
    alt: "Pallet",
    text: "Provide a platform to explore art, design, and technology.",
  },
  {
    icon: "mindblowing.svg",
    alt: "Mind Blowing",
    text: "Bridge the gap between imagination and execution.",
  },
];

</script>

<template>
  <div class="container">
    <div class="content">
      <!-- content -->
      <h2>Who we are?</h2>
      <p>{{ paragraph }}</p>
    </div>

    <!-- Small cards row -->
    <div class="card-row">
      <div class="info-card" v-for="i in cards" :key="i">
        <img :src="`icons/${i.icon}`" :alt="i.alt" class="icon">
        <p>{{ i.text }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Page styles */
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  gap: 2rem;
}

.content {
  text-align: center;
  color: white;
}

h2 {
  font-size: 28px;
  margin-bottom: 1rem;
}

p {
  color: rgb(222, 222, 222);
  font-size: 18px;
  line-height: 1.6;
  max-width: 800px;
  width: 100%;
}

/* card styles */
.card-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  margin-top: 3rem;
}

.info-card p {
  color: black;
  font-size: 20px;
}


.info-card {
  background-color: white;
  border-radius: 25px;
  padding: 1rem;
  max-width: 300px;
  text-align: left;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: all 0.3s ease-in;
}

.info-card:hover {
  transform: translateY(-10px);
  scale: 1.05;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.icon {
  width: 64px;
  height: 64px;
}

.info-card p{
  font-weight: 500;
}

@media screen and (max-width: 768px) {
  
  .content p {
    font-size: 16px;
  }
  
}

</style>
