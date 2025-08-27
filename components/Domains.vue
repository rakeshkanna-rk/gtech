<script setup>
const cards = [
  {
    icon: "filmnediting.svg",
    alt: "Film & Editing",
    text: "Lights, camera, creation! This team produces short films, trailers, reels, and video content that showcases our club’s vision and vibe.",
  },
  {
    icon: "medianphotography.svg",
    alt: "Media & Photography",
    text: "Capturing the soul of every moment our media team handles event coverage, photography, video editing, and behind-the-scenes storytelling.",
  },
  {
    icon: "artndesign.svg",
    alt: "Art & Design",
    text: "From traditional sketching to digital illustrations, this domain celebrates visual storytelling. Members work on posters, event branding, concept art, and creative campaigns.",
  },
  {
    icon: "techndev.svg",
    alt: "Technology & Development",
    text: "From coding to coding, this domain covers the art of coding. Members create interactive web apps, mobile apps, and games, ensuring a smooth user experience.",
  },
  {
    icon: "documentation.svg",
    alt: "Documentation",
    text: "From documentation to documentation, this domain covers the art of documentation. Members create manuals, guides, and user manuals, ensuring a smooth user experience.",
  },
];

</script>

<template>
  <div class="container">
    <div class="content">
      <!-- content -->
      <h2>Domains of G-Tech</h2>
    </div>

    <!-- Small cards row -->
    <div class="card-row">
      <div class="info-card" v-for="i in cards" :key="i">
        <div class="wapper">
          <img :src="`icons/domains/${i.icon}`" :alt="i.alt" class="icon">
          <h3>{{ i.alt }}</h3>
        </div>
        <p>{{ i.text }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Page styles */

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10rem 2rem;
  gap: 2rem;
}

.content {
  text-align: center;
  color: white;
}

h2 {
  font-size: 28px;
  margin-bottom: 1rem;
}

p {
  color: rgb(222, 222, 222);
  font-size: 18px;
  line-height: 1.6;
  max-width: 800px;
  width: 100%;
}

/* card styles */
.card-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  margin-top: 3rem;
  color: rgb(255, 255, 255);
}

.info-card p {
  font-size: 16px;
}

.wapper{
  display: flex;
  align-items: center;
  gap: 1rem;

}

.info-card {
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 25px;
  padding: 1rem;
  height: 250px;
  max-width: 300px;
  text-align: left;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: all 0.3s ease-in;
  gap: 1rem;
}

.info-card:hover {
  transform: translateY(-10px);
  scale: 1.05;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.icon {
  width: 64px;
  height: 64px;
}

.info-card p{
  font-weight: 500;
}

@media screen and (max-width: 768px) {
  
  .content p {
    font-size: 16px;
  }
  
}

</style>
