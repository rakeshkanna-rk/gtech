<template>
  <div class="highlight" v-for="item in highlight" :key="item.id">
    <h1>{{ item.number }}</h1>
    <p>{{ item.text }}</p>
  </div>
</template>

<script setup>
const highlight = [
    {
        id: 1,
        number: "100+",
        text: "Number of  Achievement"
    },
    {
        id: 2,
        number: "50+",
        text: "Club Members"
    },
    {
        id: 3,
        number: "75+",
        text: "Number of  Events Covered"
    }
]
</script>

<style scoped>
.highlight{
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 20px;
    padding: 0 20px;
    
}

h1{
    font-size: 65px;
    font-weight: 800;
}

p{
    font-size: 20px;
    font-weight: 800;
    opacity: 0.67;
}
</style>