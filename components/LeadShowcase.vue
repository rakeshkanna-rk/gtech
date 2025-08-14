<template>
  <div class="container" :class="alignmentClass">
    <div class="frame">
      <img :src="leadPic" :alt="alt" />
      <h1>{{ leadName }}</h1>
    </div>
    <div class="aboutLead">
      <p>{{ leadAbout }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  leadName: String,
  leadPic: String,
  leadAbout: String,
  alt: String,
  align: {
    type: String,
    default: "left",
    validator: (val) => ["left", "right"].includes(val),
  },
});

const alignmentClass = props.align === "right" ? "reverse" : "";
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  max-width: 1000px;
  margin: auto;
  padding: 20px;
  flex-wrap: wrap;
}

.container.reverse {
  flex-direction: row-reverse;
}

.frame {
  flex: 0 0 280px;
  padding: 10px;
  border: 3px solid #333;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background: transparent;
}

.frame img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
}

.frame h1 {
  font-size: 1.4rem;
  margin: 12px 0 0;
  color: #333;
}

.aboutLead {
  flex: 1;
  min-width: 250px;
}

.aboutLead p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #333;
  padding-left: 15px;
  border-left: 4px solid #333;
  border-radius: 4px;
  background: transparent;
}

.container.reverse .aboutLead p {
  padding-left: 0;
  padding-right: 15px;
  border-left: none;
  border-right: 4px solid #333;
}

@media (max-width: 768px) {
  .container,
  .container.reverse {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .aboutLead p,
  .container.reverse .aboutLead p {
    border-left: none;
    border-right: none;
    border-top: 4px solid #333;
    padding-top: 10px;
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
