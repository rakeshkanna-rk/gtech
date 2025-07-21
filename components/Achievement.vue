<template>
  <section-header
    subheading="ACHIEVEMENTS"
    main-heading="G-Tech"
    shimmer-text="Achievements"
  />
  <section class="achievements">
    <div class="grid">
      <a
        v-for="(item, index) in achievements"
        :key="index"
        :href="item.link"
        target="_blank"
        rel="noopener noreferrer"
        class="achievement-card"
      >
        <img :src="item.img" alt="achievement image" />
      </a>
    </div>
    <NuxtLink to="/achievements" class="cta">VIEW ALL ACHIEVEMENTS</NuxtLink>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const achievements = ref([]);

onMounted(async () => {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/rakeshkanna-rk/gtechdatabase/main/website/indexachievements.json"
    );
    const data = await response.json();
    achievements.value = data;
  } catch (err) {
    console.error("Failed to fetch achievements:", err);
  }
});
</script>

<style scoped>
.achievements {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
}

.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.achievement-card img {
  width: 300px;
  height: 370px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
}

.achievement-card:hover img {
  transform: scale(1.05);
}

.cta {
  display: block;
  width: fit-content;
  text-align: center;
  margin-top: 3rem;
  padding: 1rem 1.2rem;
  color: #fff;
  text-decoration: none;
  border-radius: 15px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.cta:hover {
  background-color: #6600ce;
}
</style>
