<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar-links">
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/events">Events</NuxtLink>
        <NuxtLink to="/domains">Domains</NuxtLink>
        <NuxtLink to="/projects">Projects</NuxtLink>
        <NuxtLink to="/gallery">Gallery</NuxtLink>
      </div>
      <NuxtLink to="/join" class="join-button">Join Us</NuxtLink>
    </div>
  </nav>
</template>

<script setup>
import "@/css/navbar.css";
</script>
