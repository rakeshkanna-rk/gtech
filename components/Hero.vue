<template>
  <section class="hero">
    <div class="hero-content">
      <EventHeadBtn />
      <h1>Generalize Technology</h1>
      <h2>A Fine Arts Association at GNC</h2>
      <p>
        {{ subTitle }}
      </p>
      <div class="ctaSection">
        <NuxtLink to="/projects" class="cta viewProjects"
          >VIEW PROJECTS <img src="~/assets/icons/right-arrow.svg" alt=""
        /></NuxtLink>
        <NuxtLink to="/register" class="cta upcomingEvents"
          >REGISTER NOW</NuxtLink
        >
      </div>
    </div>
  </section>
</template>

<script setup>
// Props, refs, and logic go here
const subTitle =
  "G-Tech fosters tech innovation, bridges academia and industry, and empowers students to become tomorrow’s leaders.";
</script>

<style scoped>
.hero {
  padding: 8rem 1rem;
  color: #fff;
  text-align: center;
}

.hero-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 20px;
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
  color: var(--w-p-color);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.ctaSection {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.cta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 15px 30px;
  text-decoration: none;
  transition: background 0.3s ease;
  border-radius: 0.8rem;
}

.viewProjects {
  background-color: var(--text-color);
  font-weight: 600;
  color: #6600CE;
}

.viewProjects:hover {
  background: linear-gradient(to right, #6600ce, #330068);
  color: var(--text-color);
}

 .viewProjects:hover img {
   filter: brightness(0) invert(1);
 }

.upcomingEvents {
  color: white;
  font-weight: 600;
  border: 1px solid var(--w-p-color); 
}
</style>
