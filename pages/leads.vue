<script setup>
import imageFrame from "~/components/LeadShowcase.vue";
import leadsData from "~/data/leads/2k25.js";

import { ref } from "vue";
const activeTab = ref("2k25to26");

</script>

<template>
  <div class="year">
    <div class="tab-buttons">
      <button

        :class="{ active: activeTab === '2k25to26' }"
        @click="activeTab = '2k25to26'"
      >
        2025 - 2026
      </button>
      <button
        :class="{ active: activeTab === '2k24to25' }"
        @click="activeTab = '2k24to25'"
      >
        2024 - 2025
      </button>
    </div>
  </div>

  <imageFrame
    v-show="activeTab === '2k25to26'"
    class="tab-panel"
    v-for="(lead, index) in leadsData"
    :key="index"
    :leadName="lead.name"
    :leadPic="lead.image"
    :leadAbout="lead.about"
    :leadPosition="lead.position"
    :align="index % 2 ? 'right' : 'left'"
  />
</template>

<style scoped>
.year {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding:  50px 20px;
}
.tab-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
  width: 100%;
}

.tab-buttons button {
  all: unset;
  font-family: var(--primary-font);
  color: var(--white-color);
  padding: 17.5px 40px;
  border: 1px solid #ccc;
  cursor: pointer;
  border-radius: 20px;
  font-size: var(--h2);
  background: var(--glass-color-03);
  backdrop-filter: blur(6.5px);
}

.tab-buttons button.active {
  color: white;
  border-color: #149ed4;
}

.tab-content {
  margin-top: 20px;
  color: white;
  font-family: var(--primary-font);
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.tab-panel {
  animation: fade 0.5s ease;
  width: 100%;
}

@keyframes fade {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.cards {
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}

@media screen and (max-width: 601px) {
  .tab-buttons button {
    font-size: var(--h3);
    width: 80%;
    text-align: center;
  }
}
</style>
