<template>
  <h2>Current Leads</h2>
  <div class="leads">
    <div class="card" v-for="(lead, index) in leadsData" :key="index">
      <img :src="lead.image" :alt="lead.name" />
      <h3>{{ lead.name }}</h3>
      <p>{{ lead.position }}</p>
    </div>
  </div>
</template>

<script setup>
import leadsData from "~/data/leads/2k25.js";
</script>

<style scoped>
.leads {
  display: flex;
  flex-direction: row;
  overflow: auto;
  justify-content: start;
  align-items: center;
  gap: 2rem;
  color: #fff;
  padding: 2rem;
}

@media screen and (max-width: 768px) {
  .leads::-webkit-scrollbar {
    display: none; /* Hides the scrollbar */
  }
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #ffffff61;
  border-radius: calc(1rem + 10px);
  transition: scale 0.3s ease;
}

.card:hover {
  scale: 1.05;
}

img {
  width: 200px;
  height: 300px;
  border-radius: 10px;
  object-fit: cover;
}

h2 {
  text-align: center;
  color: white;
  padding-top: 5rem;
}
</style>
