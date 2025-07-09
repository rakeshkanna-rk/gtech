<script setup>
const links = [
  {
    name: "HOME",
    href: "/",
  },
  {
    name: "ABOUT",
    href: "/about",
  },
  {
    name: "EVENTS",
    href: "/events",
  },
  {
    name: "DOMAINS",
    href: "/domains",
  },
  {
    name: "BLOG",
    href: "/blog",
  },
  {
    name: "LINKS",
    href: "/links",
  },
];
</script>

<template>
  <nav class="navbar">
    <div class="navbar-container">
      <img
        class="logo"
        src="@/assets/logo.svg"
        alt="logo"
        @click="$router.push('/')"
      />
      <div class="navbar-links">
        <NuxtLink
          v-for="link in links"
          :key="link.name"
          :to="link.href"
          :class="{  active : $route.path === link.href }"
        >
          {{ link.name }}
        </NuxtLink>
      </div>

      <NuxtLink to="/" class="join-button">✦ &nbsp;Join Us</NuxtLink>
    </div>
  </nav>
</template>

<style scoped>
.logo {
  width: 60px;
  height: 60px;
  cursor: pointer;
}

.navbar {
  background: linear-gradient(to right, #6600ce, #330068);
  padding: 1rem 4rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

.navbar-container {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-links {
  display: flex;
  gap: 1.5rem;
  font-weight: 500;
  font-size: 16px;
}

.navbar-links a {
  text-decoration: none;
  transition: text-decoration 0.3s ease;
  color: var(--text-hover);
}

.navbar-links a:hover {
  color: var(--text-hover);
}

.navbar-links a.active {
  color: var(--text-color);
}

.join-button {
  background-color: white;
  color: #5F00C0;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 100px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.join-button:hover {
  background-color: #f3f4f6;
}
</style>
