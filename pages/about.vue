<template>
  <section class="about">
    <div class="about-content">
      <h1 class="shimmer-text">About G-Tech</h1>
      <p class="intro">
        Generalize Technology (G-Tech) is the Fine Arts Association of Guru
        Nanak College — a space where art collides with innovation, and
        creativity fuels transformation.
      </p>
      <p>
        At G-Tech, we don't just host events — we craft experiences. From
        AI-powered art installations to beatboxing battles, from digital design
        workshops to theater fests, we turn ideas into impact.
      </p>
      <p>
        Our goal? To empower students to think beyond boundaries — to blend
        logic with expression, science with soul. Whether you're a coder,
        dancer, writer, or dreamer, G-Tech is your canvas.
      </p>
      <p class="closing">
        This isn't just a club. This is a movement. Welcome to the fusion of
        mind and magic.
      </p>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 6rem 1.5rem;
  background-color: #12002f;
  color: #fff;
  text-align: center;
}

.about-content {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.shimmer-text {
  /* Grey color I think */
  background: linear-gradient(90deg, #ddd 50%, #aaa 75%, #ddd 100%);
  background-size: 200% 100%;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: shimmer 1.5s infinite linear;
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

@keyframes shimmer {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
}

.intro {
  font-size: 1.3rem;
  color: #e0e0e0;
}

.about-content p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #c2c2c2;
}

.closing {
  font-style: italic;
  color: #f0f0f0;
}
</style>
