<script setup>
import imageFrame from "~/components/LeadShowcase.vue";
import monishImg from "~/assets/leadsPic/monish.JPG";
import rakeshImg from "~/assets/leadsPic/rakesh.JPG";
import jayanthImg from "~/assets/leadsPic/jayanth.JPG";

import devaImg from "~/assets/leadsPic/deva.JPG";
import aiswariaImg from "~/assets/leadsPic/Aiswariya.jpeg";

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
  {
    id: 3,
    name: "Rakesh Kanna",
    image: rakeshImg,
    about: "Rakesh is the lead for the domain graphic designing",
  },
  {
    id: 4,
    name: "Jayanth",
    image: jayanthImg,
    about: "Jayanth is the lead for the domain documentation",
  },
  {
    id: 5,
    name: "Aiswariya",
    image: aiswariaImg,
    about: "Aishwaria is the cultural secretady for the GTECH club.",
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
