<script setup>
const isUnderDevelopment = true; // Set based on your logic
</script>

<template>
  <div>
    <div v-if="isUnderDevelopment" class="underdevelopment">
      <h1>Page is Under Development</h1>
      <p>We are working on this page. Please check back later.</p>
    </div>

    <template v-else>
      <!-- Actual page content goes here -->
      <h1>Welcome to the example page!</h1>
    </template>
  </div>
</template>

<style scoped>
/* Page styles go here */

.underdevelopment{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10rem 2rem;
  gap: 1rem;
  color: #fff;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

p{
  font-size: 1.5rem;
}

</style>