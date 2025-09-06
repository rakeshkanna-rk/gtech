<template>
  <div class="whatwedo">
    <h1>WHAT WE DO</h1>
    <div class="wrapper">
      <div
        class="card"
        v-for="item in wwd"
        :key="item.id"
        :style="`background-image: url(/images/${item.image}.webp);`"
      >
        <div class="layer"></div>
        <!-- <img :src="`/images/${item.image}.webp`" :alt="item.title"> -->
        <p>{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const wwd = [
  {
    image: "photography",
    title: "Photography",
  },
  {
    image: "videography",
    title: "Videography",
  },
  {
    image: "editing",
    title: "Video Editing",
  },
  {
    image: "designing",
    title: "Designing",
  },
  {
    image: "coding",
    title: "Web Development",
  },
  {
    image: "social",
    title: "Social Media Management",
  },
  {
    image: "documentation",
    title: "Documentation",
  },
  {
    image: "cultural",
    title: "Cultural Events",
  },
];
</script>

<style scoped>
.whatwedo {
  padding: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  padding: 1.5rem 0;
}

.card {
    display: flex;
    align-items: center;
    
  width: 300px;
  height: 350px;
  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-size: cover;
  background-position: center;
}

.layer {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  width: 300px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
}

p {
  position: relative;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;

  z-index: 2;
}
</style>
