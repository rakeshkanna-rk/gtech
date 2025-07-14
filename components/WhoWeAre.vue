<template>
  <div class="container">
    <div class="content">
      <!-- content -->
      <h2>Who we are?</h2>
      <p>
        G-Tech (Generalized Technology) is the official Fine Arts Association of
        Guru Nanak College (GNC).
      </p>
      <p>
        We are a dynamic community of creators, innovators, and performers who
        believe in the power
      </p>
      <p>of combining art and technology to create meaningful experiences.</p>

      <!-- Small cards row -->
      <div class="card-row">
        <div class="info-card">
          <div class="icon-placeholder"></div>
          <p>Faster creativity and innovation among students.</p>
        </div>
        <div class="info-card">
          <div class="icon-placeholder"></div>
          <p>Provies a platform to expore art, design and technology.</p>
        </div>
        <div class="info-card">
          <div class="icon-placeholder"></div>
          <p>Bridge the gap between imagination and execution.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Page styles */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.content {
  text-align: center;
  color: white;
}

h2 {
  font-size: 2rem;
  margin-bottom: 2em;
}

p {
  color: rgb(156, 151, 151);
  font-size: 1.6rem;
  line-height: 1.6;
}

/* card styles */
.card-row {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 3rem;
}

.info-card p {
  color: black;
  font-size: 20px;
}

.info-card {
  background-color: white;
  height: 125px;
  width: 275px;
  border-radius: 25px;
  padding: 1rem;
  text-align: left;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: relative;
}

.icon-placeholder {
  width: 64px;
  height: 64px;
  background-color: #e0e0e0;
  border-radius: 6px;
  margin-bottom: 0.75rem;
}
</style>
