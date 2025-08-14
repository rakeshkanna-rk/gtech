<script setup>
import imageFrame from "~/components/LeadShowcase.vue";
import monishImg from "~/assets/leadsPic/monish.JPG";

import devaImg from "~/assets/leadsPic/deva.JPG";

const leadsData = [
  {
    id: 1,
    name: "Monish",
    image: monishImg,
    about:
      "Monish is the overall lead of the GTECH lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
  },
  {
    id: 2,
    name: "Deva",
    image: devaImg,
    about: "Deva is the overall co-lead of the GTECH",
  },
];
</script>

<template>
  <imageFrame
    v-for="(lead, index) in leadsData"
    :key="index"
    :leadName="lead.name"
    :leadPic="lead.image"
    :leadAbout="lead.about"
    :align="index % 2 ? 'right' : 'left'"
  />
</template>
