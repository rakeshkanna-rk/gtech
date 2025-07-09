<template>
    <section class="hero">
    <div class="hero-content">
      <h1>Generalize Technology</h1>
      <h2>A Fine Arts Association at GNC</h2>
      <p>
        G-Tech fosters tech innovation, bridges academia and industry, and
        empowers students to become tomorrow's leaders.
      </p>
      <div class="ctaSection">
        <NuxtLink to="/projects" class="cta viewProjects"
          >VIEW PROJECTS</NuxtLink
        >
        <NuxtLink to="/projects" class="cta upcomingEvents"
          >REGISTER NOW</NuxtLink
        >
      </div>
    </div>
  </section>
</template>

<script setup>
// Props, refs, and logic go here
</script>

<style scoped>
.hero {
  padding: 61rem 1rem;
  color: #fff;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.hero h2 {
  font-size: 1.75rem;
  font-weight: normal;
  margin-bottom: 1.5rem;
  color: #ccc;
}

.hero p {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #e5e5e5;
}

.ctaSection {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.cta {
  display: inline-block;
  padding: 0.75rem 1.5rem;

  text-decoration: none;
  transition: background 0.3s ease;
}

.viewProjects {
  background-color: white;
  color: black;
  border-radius: 0.8rem;
}

.viewProjects:hover {
  background-color: #f3f3f3;
}

.upcomingEvents {
  color: white;
}

</style>