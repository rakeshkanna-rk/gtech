<template>
  <section class="hero contact-section">
    <div class="hero-content contact-content">
      <div class="contact-left">
        <h2>Let's Connect</h2>
        <p class="subtitle">Have questions, ideas, or just wanna say hi?</p>
        <p>
          <strong>Phone:</strong>
          <a href="">+91 99945 90161</a>
        </p>
        <p>
          <strong>Email:</strong>
          <a href="mailto:gtech@gurunanakcollege.edu.in"
            >gtech@gurunanakcollege.edu.in</a
          >
        </p>
      </div>

      <div class="contact-right">
        <a href="" target="_blank" class="cta viewProjects">
          Instagram
          <img src="~/assets/icons/right-arrow.svg" alt="Instagram" />
        </a>

        <a href="" target="_blank" class="cta upcomingEvents"> LinkedIn </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  padding: 8rem 1rem;
  background-color: #12002f;
  color: #fff;
}

.contact-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 3rem;
  max-width: 1000px;
  margin: 0 auto;
  text-align: left;
}

.contact-left {
  flex: 1;
  min-width: 280px;
}

.contact-left h2 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  color: var(--w-p-color);
  font-style: italic;
}

.contact-left p {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: var(--w-p-color);
}

.contact-left a {
  color: var(--w-p-color);
  text-decoration: none;
}

.contact-left a:hover {
  text-decoration: underline;
}

.contact-right {
  flex: 1;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
}

.cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 15px 30px;
  text-decoration: none;
  transition: background 0.3s ease;
  border-radius: 0.8rem;
  font-weight: 600;
}

.viewProjects {
  background-color: var(--text-color);
  color: #6600ce;
}

.viewProjects:hover {
  background: linear-gradient(to right, #6600ce, #330068);
  color: var(--text-color);
}

.viewProjects:hover img {
  filter: brightness(0) invert(1);
}

.upcomingEvents {
  color: var(--w-p-color);
  border: 1px solid var(--w-p-color);
}

.upcomingEvents:hover {
  background-color: #ffffff1a;
}

@media screen and (max-width: 768px) {
  .contact-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .contact-left,
  .contact-right {
    text-align: center;
  }

  .cta {
    width: 100%;
  }
}
</style>
