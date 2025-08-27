<template>
  <div class="cardContainer">
    <div>
      <img :src="img" :alt="alt" />
      <h3 class="cardTitle">{{ title }}</h3>
    </div>
    <p class="cardText">{{ text }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.cardContainer {
  padding: 1rem;
  border-radius: 0.75rem;
  border: 1px solid #ccc;
  max-width: 400px;
  margin: 1rem auto;
  transition: transform 0.2s ease;
}

.cardContainer:hover {
  transform: translateY(-5px);
}

.cardTitle {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.cardText {
  font-size: 1rem;
  color: #666;
}
</style>
