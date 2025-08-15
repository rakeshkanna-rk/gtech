<script setup>
import imageFrame from "~/components/LeadShowcase.vue";

import aiswariaImg from "~/assets/leadsPic/Aiswariya.jpeg";
import bhargavImg from "~/assets/leadsPic/bhargav.jpg";
import devaImg from "~/assets/leadsPic/deva.JPG";
import jayanthImg from "~/assets/leadsPic/jayanth.JPG";
import kishoreImg from "~/assets/leadsPic/Kishore.jpeg";
import monishImg from "~/assets/leadsPic/monish.JPG";
import rakeshImg from "~/assets/leadsPic/rakesh.JPG";
import thiruImg from "~/assets/leadsPic/thiru.jpg";

const leadsData = [
  {
    id: 1,
    name: "Monish",
    image: monishImg,
    about: "Monish is the overall lead of the GTECH.",
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
    name: "Aishwariya",
    image: aiswariaImg,
    about: "Aishwaria is the cultural secretady for the GTECH club.",
  },
  {
    id: 6,
    name: "Bhargav",
    image: bhargavImg,
    about: "Bhargav is the lead for the domain videography",
  },
  {
    id: 7,
    name: "Kishore",
    image: kishoreImg,
    about: "Kishore is the lead for the domain photography",
  },
  {
    id: 8,
    name: "Thiru",
    image: thiruImg,
    about: "Thiru is the lead for the domain video editing",
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
