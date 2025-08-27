<template>
  <footer>
    <div class="logo-holder">
      <img class="logo" src="@/assets/logo.svg" alt="logo" />
      <p>Fueling Innovation Through Art & Tech.</p>
      <div class="social">
        <img @click="$router.push('https://www.instagram.com/g_techgnc/')" class="social" src="@/assets/icons/instagram.svg" alt="instagram">
        <img @click="$router.push('https://www.linkedin.com/in/g-tech-club-gnc-94769b368/')" class="social" src="@/assets/icons/linkedin.svg" alt="linkedin">
      </div>
    </div>
  </footer>
</template>

<script setup>
// Props, refs, and logic go here
</script>

<style scoped>
footer {
  display: flex;
  flex-direction: row;
  padding: 30px;
  background: linear-gradient(to right, #6600ce, #330068);
}

.logo-holder{
    display: flex;
    flex-direction: column;
    padding: 50px;
    gap: 20px;
}

.logo {
    width: 70px;
}

.logo-holder p {
    color: var(--text-hover);
}

.social{
    display: flex;
    flex-direction: row;
    gap: 20px;
}

.social img{
    width:40px;
    margin-top: 10px;
    opacity: 0.9;
}

.social img:hover{
    opacity: 1;
}

</style>
