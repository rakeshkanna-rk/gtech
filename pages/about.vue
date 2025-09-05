<template>
  <section class="about">
    <div class="hero">
      <img src="@/assets/team.avif" alt="teambg" class="bg" />
      <div class="text">
        <h1 class="shimmer-text">We are the Next Gen Tech Innovators</h1>
        <h2>The Future is Here at G-Tech</h2>
      </div>
    </div>
    <AboutWWA />
    <IndexLead />
  </section>
</template>

<style scoped>
.about {
  background: var(--bg-color);
  color: #fff;
}
.hero {
  height: 100vh;
  width: 100%;
}

.bg {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.text{
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.hero h2 {
  font-size: 2rem;
  font-weight: normal;
  color: var(--w-p-color);
  font-family: "Playball", cursive;
}

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

  font-size: 4rem;
  font-weight: bold;
}

@keyframes shimmer {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
}
</style>
