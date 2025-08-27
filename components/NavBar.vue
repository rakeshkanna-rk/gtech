<script setup>
import { ref } from "vue";

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

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
    name: "GALLERY",
    href: "/gallery",
  },
  {
    name: "LEADS",
    href: "/leads",
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

      <!-- Desktop Links -->
      <div class="navbar-links">
        <NuxtLink
          v-for="link in links"
          :key="link.name"
          :to="link.href"
          :class="{ active: $route.path === link.href }"
        >
          {{ link.name }}
        </NuxtLink>
      </div>

      <NuxtLink to="/joinus" class="join-button disk">✦ &nbsp;Join Us</NuxtLink>

      <!-- Hamburger for Mobile -->
      <div class="hamburger" @click="toggleMobileMenu">
        <span></span><span></span><span></span>
      </div>
    </div>

    <!-- Side Panel (Mobile Navbar) -->
    <transition name="slide">
      <div v-if="isMobileMenuOpen" class="mobi-sidebar">
        <div class="close-btn" @click="closeMobileMenu">×</div>
        <NuxtLink
          v-for="link in links"
          :key="link.name"
          :to="link.href"
          @click="closeMobileMenu"
          class="mobi-link"
          :class="{ active: $route.path === link.href }"
        >
          {{ link.name }}
        </NuxtLink>
        <NuxtLink to="/join-us" class="join-button mobi" @click="closeMobileMenu"
          >✦ &nbsp;Join Us</NuxtLink
        >
      </div>
    </transition>
  </nav>
</template>

<style scoped>
.logo {
  width: 50px;
  height: 50px;
  cursor: pointer;
}

.navbar {
  background: linear-gradient(to right, #6600ce, #330068);
  padding: 0.7rem 4rem;
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
  color: var(--text-color);
}

.navbar-links a.active {
  color: var(--text-color);
}

.join-button {
  background-color: white;
  color: #5f00c0;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 100px;
  text-decoration: none;
  transition: box-shadow 0.3s ease;
}

.join-button:hover {
  box-shadow: 0 0 20px #ffffff;
}

.mobi-navbar {
  display: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.5rem;
  font-weight: 500;
  font-size: 16px;
  padding: 1.5rem 1rem;
  height: 100vh;
}

.mobi-navbar a {
  text-decoration: none;
  transition: text-decoration 0.3s ease;
  color: var(--text-hover);
  font-weight: 600;
  font-size: 20px;
}

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  padding: 15px;
  border: 1px solid #ffffff88;
  border-radius: 10px;
}
.hamburger span {
  width: 24px;
  height: 3px;
  background: #ffffff;
  border-radius: 2px;
}

/* Sidebar (Mobile Panel) */
.mobi-sidebar {
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  height: 100vh;
  background: linear-gradient(to right, #6600ce, #330068);
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  animation: slideIn 0.3s ease-out forwards;
}

.mobi-link {
  text-decoration: none;
  transition: text-decoration 0.3s ease;
  color: var(--text-hover);
  font-weight: 600;
  font-size: 20px;
}

.mobi-link a:active {
  color: var(--text-color);
}

.close-btn {
  font-size: 2rem;
  align-self: flex-end;
  cursor: pointer;
  color: white;
  padding: 3px 15px;
  border: 1px solid #ffffff88;
  border-radius: 10px;
}

/* Active Link */
.active {
  font-weight: bold;
  color: #ffffff;
}

/* Responsive */
@media (max-width: 768px) {
  .navbar-links {
    display: none;
  }
  .hamburger {
    display: flex;
  }
}

/* Slide Animation */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from {
  transform: translateX(100%);
}
.slide-leave-to {
  transform: translateX(100%);
}

@media screen and (max-width: 768px) {
  .navbar-links {
    display: none;
  }

  .navbar {
    padding: 0.7rem 1rem;
  }

  .mobi-navbar {
    display: flex;
  }

  .disk {
    display: none;
  }

  .mobi {
    display: block;
    width: fit-content;
    scale: 1.2;
    margin-top: 1rem;
  }
}
</style>
