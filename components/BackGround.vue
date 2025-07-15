<template>
  <img
    src="@/assets/ballsbg.svg"
    class="bg-img"
    id="desktop-bg"
    alt="background image"
    fetchpriority="high"
    loading="lazy"
  />
    <img
    src="@/assets/mobiballsbg.svg"
    class="bg-img"
    id="mobile-bg"
    alt="background image"
    fetchpriority="high"
    loading="lazy"
  />
</template>

<script setup>
// Props, refs, and logic go here
</script>

<style scoped>
.bg-img {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
  pointer-events: none; /* Makes sure it doesn’t block clicks */
}

#desktop-bg {
  display: block;
}

#mobile-bg {
  display: none;
}

@media screen and (max-width: 601px) {
  #desktop-bg {
    display: none;
  }

  #mobile-bg {
    display: block;
  }
}
</style>