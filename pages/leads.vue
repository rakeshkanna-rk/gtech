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
import dharshanImg from "~/assets/leadsPic/dharshan.jpg";

const abtLead = `
The leader of G-Tech plays a pivotal role in guiding the club’s 
vision and inspiring members to explore the limitless potential of 
technology. With a focus on innovation, teamwork, and practical 
learning, they ensure that G-Tech remains a vibrant platform for 
students passionate about coding, AI, robotics, and other emerging 
technologies. Under their leadership, the club regularly organizes 
workshops, hackathons, and knowledge-sharing sessions that not only 
sharpen technical skills but also foster creativity and collaboration. 
By encouraging curiosity and empowering every member to contribute, 
the leader helps make G-Tech a true hub of learning, growth, and 
technological excellence on campus.
`;

const abtCoLead = `
The co-leader of G-Tech works closely alongside the club leader to 
support the club’s mission of fostering innovation and technological 
skill development. They play a key role in coordinating projects, 
events, and workshops, ensuring smooth execution and active member 
engagement. By promoting collaboration and encouraging creative 
problem-solving, the co-leader helps cultivate an inclusive and dynamic 
environment where members can grow both technically and personally. 
Their dedication and leadership contribute significantly to maintaining 
G-Tech as a thriving community for technology enthusiasts on campus.
`;

const abtGraDesLead = `
The Graphics Design Lead at G-Tech is responsible for shaping the 
visual identity of the club, creating compelling and creative designs 
that effectively communicate the club’s activities and values. 
They design promotional materials, event posters, social media 
visuals, and branding assets that enhance the club’s presence both 
on campus and online. With a strong eye for aesthetics and a 
passion for visual storytelling, the Graphics Design Lead collaborates 
closely with the leadership team to ensure that all designs reflect the 
innovative spirit of G-Tech. Their creativity and technical skills play 
a vital role in engaging members and attracting new talent to the club.
`;

const abtDocLead = `
The Documentation Lead holds a vital role in G-Tech by meticulously 
recording and organizing all club activities, projects, and events. 
They ensure that comprehensive and accurate documentation is maintained, 
making it easy for members and newcomers to access valuable resources 
and track the club’s progress. By creating clear reports, manuals, and summaries, 
the Documentation Lead supports effective communication within the team 
and preserves the club’s knowledge legacy. Their attention to detail and 
dedication help maintain G-Tech’s professionalism and continuity, empowering 
the club to thrive year after year.
`;

const abtCulturalSec = `
The Cultural Secretary of G-Tech plays a key role in enriching 
the club’s environment by organizing cultural, social, and team-building 
activities that foster camaraderie among members. They coordinate events 
that celebrate diversity, creativity, and collaboration, helping to build 
a welcoming and inclusive community within the club. By blending technology 
with cultural experiences, the Cultural Secretary enhances member engagement 
and ensures that G-Tech is not only a place for technical growth but also 
for personal and social development. Their efforts contribute to a vibrant 
club culture that inspires belonging and enthusiasm among all members. 
`;

const abtVideographyLead = `
The Videography Lead at G-Tech is responsible for capturing and showcasing 
the club’s journey through creative and engaging video content. 
They document events, workshops, and projects, producing high-quality 
videos that highlight the club’s activities and achievements. By combining 
technical skills in filming and editing with a storytelling mindset, 
the Videography Lead helps amplify G-Tech’s presence on social media and other 
platforms. Their work not only preserves memorable moments but also attracts 
new members by visually conveying the vibrant and innovative spirit of the club.
`;

const abtPhotographyLead = `
The Photography Lead plays an essential role in capturing the essence and energy 
of G-Tech’s events, projects, and day-to-day activities through compelling and 
high-quality photographs. They ensure that key moments are documented with 
creativity and attention to detail, providing the club with a rich visual archive 
that celebrates its journey. By collaborating with other teams, the Photography 
Lead helps enhance G-Tech’s branding and storytelling, using imagery to engage 
members and showcase the club’s vibrant community. Their artistic eye and technical 
expertise are invaluable in bringing the club’s story to life visually.
`;

const abtVideoEditingLead = `
The Video Editing Lead at G-Tech is responsible for transforming raw footage 
into polished, engaging videos that effectively communicate the club’s 
activities and achievements. They apply their expertise in editing software 
to create visually appealing content that enhances storytelling and captures 
the attention of members and the wider audience. Collaborating closely with 
the Videography Lead and other team members, the Video Editing Lead ensures 
that all video materials maintain high quality and align with the club’s 
brand identity. Their creativity and technical skills are crucial in showcasing 
G-Tech’s dynamic and innovative spirit through compelling visual media.
`;

const abtWebDevLead = `
The Web Development Lead is responsible for designing, developing, and 
maintaining G-Tech’s online presence through its website and digital platforms. 
They ensure that the club’s website is user-friendly, visually appealing, 
and up-to-date with the latest information about events, projects, and resources. 
By leveraging coding skills and web technologies, the Web Development Lead enhances 
member engagement and accessibility, making it easier for students to connect 
with and benefit from G-Tech’s offerings. Their technical expertise and attention 
to detail play a vital role in representing the club professionally and dynamically 
in the digital space.
`;

const leadsData = [
  {
    id: 1,
    name: "Monishwar",
    position: "Leader",
    image: monishImg,
    about: abtLead,
  },
  {
    id: 2,
    name: "Devanand",
    position: "Co-Leader",
    image: devaImg,
    about: abtCoLead,
  },
  {
    id: 3,
    name: "Thiruvasagam",
    position: "Video Editing Lead",
    image: thiruImg,
    about: abtVideoEditingLead,
  },
  {
    id: 4,
    name: "Bhargav Sundarsan",
    position: "Videography Lead",
    image: bhargavImg,
    about: abtVideographyLead,
  },
  {
    id: 5,
    name: "Kishore",
    position: "Photography Lead",
    image: kishoreImg,
    about: abtPhotographyLead,
  },
  {
    id: 6,
    name: "Rakesh Kanna",
    position: "Graphic Design Lead",
    image: rakeshImg,
    about: abtGraDesLead,
  },
  {
    id: 7,
    name: "Dharshan",
    position: "Web Development Lead",
    image: dharshanImg,
    about: abtWebDevLead,
  },
  {
    id: 8,
    name: "Jayanth",
    position: "Documentation Lead",
    image: jayanthImg,
    about: abtDocLead,
  },
  {
    id: 9,
    name: "Aishwarya Lakshmi",
    position: "Cultural Secretary",
    image: aiswariaImg,
    about: abtCulturalSec,
  },
];

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
