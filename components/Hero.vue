<template>
  <section class="hero">
    <div class="hero-content">
      <EventHeadBtn />
      <h1 class="shimmer-text">Generalize Technology</h1>
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

.shimmer-text {
  background: linear-gradient(90deg, #ddd 50%, #aaa 75%, #ddd 100%);
  background-size: 200% 100%;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: shimmer 1.5s infinite linear;

  text-align: center;
  position: relative;
  margin: 0;
  line-height: 1.5;
  padding: 0 10px;
}

@media screen and (max-width: 601px) {
  .shimmer-text {
    font-size: calc(5rem * 0.75);
  }
}

@keyframes shimmer {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
}

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
  font-size: 1.5rem;
  font-weight: normal;
  color: var(--w-p-color);
  font-family: "Playball", cursive;
}

.hero p {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: var(--w-p-color);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.ctaSection {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 15px 30px;
  text-decoration: none;
  transition: background 0.3s ease;
  border-radius: 0.8rem;
}

.viewProjects {
  background-color: var(--text-color);
  font-weight: 600;
  color: #6600ce;
}

.viewProjects:hover {
  background: linear-gradient(to right, #6600ce, #330068);
  color: var(--text-color);
}

.viewProjects:hover img {
  filter: brightness(0) invert(1);
}

.upcomingEvents {
  color: var(--w-p-color);
  font-weight: 600;
  border: 1px solid var(--w-p-color);
}

.upcomingEvents:hover {
  background-color: #ffffff1a;
}

@media screen and (max-width: 601px) {

  .hero {
    padding: 4rem 1rem;
  }

  .hero h1 {
    font-size: 4rem;
  }

  .hero h2 {
    font-size: 1.5rem;
  }

  .hero p {
    font-size: 1rem;
  }

  .cta {
    padding: 20px 40px;
    width: 50%;
    text-align: center;
    font-size: 18px;
  }
  
  
}
</style>
