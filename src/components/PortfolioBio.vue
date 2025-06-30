<template>

 <section class="portfolio-bio"> 

    <div class="bio">
      <p>
        Interdisciplinary product researcher & designer, currently reading curating and listening to
       I love to use lots of interactive design, 3D, behavioral based research, and other experimental elements to create ideal launches
      </p>
    </div>

    <!-- Skills Section -->
    <div class="portfolio-skills">
      <!-- Tech Stack Row -->
      <div class="skill-row">
        <h3 class="skill-category">Tech Stack</h3>
        <div class="skill-icons">
          <img src="../assets/graphics/miguel-logo.svg" alt="CSS3" class="skill-icon">
          <img src="../assets/graphics/miguel-logo.svg" alt="JavaScript" class="skill-icon">
          <img src="../assets/graphics/miguel-logo.svg" alt="Vue.js" class="skill-icon">
          <img src="../assets/graphics/miguel-logo.svg" alt="Node.js" class="skill-icon">
        </div>
      </div>

      <!-- Software Row -->
      <div class="skill-row">
        <h3 class="skill-category">Software</h3>
        <div class="skill-icons">
          <img src="../assets/graphics/miguel-logo.svg" alt="CSS3" class="skill-icon">
          <img src="../assets/graphics/miguel-logo.svg" alt="JavaScript" class="skill-icon">
          <img src="../assets/graphics/miguel-logo.svg" alt="Vue.js" class="skill-icon">
          <img src="../assets/graphics/miguel-logo.svg" alt="Node.js" class="skill-icon">
        </div>
      </div>

      <!-- Skills Row -->
      <div class="skill-row">
        <h3 class="skill-category">Skills</h3>
        <div class="skill-icons">
          <img src="../assets/graphics/miguel-logo.svg" alt="CSS3" class="skill-icon">
          <img src="../assets/graphics/miguel-logo.svg" alt="JavaScript" class="skill-icon">
          <img src="../assets/graphics/miguel-logo.svg" alt="Vue.js" class="skill-icon">
          <img src="../assets/graphics/miguel-logo.svg" alt="Node.js" class="skill-icon">
        </div>
      </div>

      <!-- Other Row -->
      <div class="skill-row">
        <h3 class="skill-category">Other</h3>
        <div class="skill-icons">
          <img src="../assets/graphics/miguel-logo.svg" alt="CSS3" class="skill-icon">
          <img src="../assets/graphics/miguel-logo.svg" alt="JavaScript" class="skill-icon">
          <img src="../assets/graphics/miguel-logo.svg" alt="Vue.js" class="skill-icon">
          <img src="../assets/graphics/miguel-logo.svg" alt="Node.js" class="skill-icon">
        </div>
      </div>

      <!-- Capabilities Row -->
      <div class="skill-row capabilities-row">
        <h3 class="skill-category">Capabilities</h3>
        <div class="capabilities-list">
          <span class="capability-item">UI Design</span>
          <span class="capability-item">Front end development</span>
          <span class="capability-item">AI-application development</span>
          <span class="capability-item">3D Rendering</span>
        </div>
      </div>
    </div>
</section>

</template>

<style scoped>

.bio {
  margin-bottom: 4rem;
}

.bio p {
  font-size: 3rem;
  line-height: 1.2;
  font-weight: 400;
  letter-spacing: -1px;
}



.portfolio-skills {
  display: flex;
  flex-direction: column;
}

.skill-row {
  display: grid;
  grid-template-columns: 200px 1fr;
  align-items: center;
  padding: 1.5rem 0;
  border-bottom: 1px solid #ffffff84;
}

.skill-row:first-child {
  border-top: 1px solid #ffffff84;
}

.skill-row:last-child {
  border-bottom: none;
}

.skill-category {
  font-size: 2rem;
  font-weight: 400;
  margin: 0;
  color: #fff;
}

.skill-icons {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: end;
}

.skill-icon {
  width: 3rem;
  height: auto;
  object-fit: contain;
}

.capabilities-row {
  grid-template-columns: 200px 1fr;
  align-items: start;
}

.capabilities-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

}

.capability-item {
  font-size: 1.85rem;
  font-weight: 300;
  color: #e5e1e1;
  text-align: right;
}

/* Responsive Design */
@media (max-width: 768px) {
  .portfolio-bio {
    padding: 1.5rem;
  }
  
  .bio-text p {
    font-size: 1.8rem;
  }
  
  .skill-row {
    grid-template-columns: 1fr;
    gap: 1rem;
    text-align: center;
  }
  
  .capabilities-list {
    align-items: center;
  }
  
  .capability-item {
    text-align: center;
    font-size: 1.25rem;
  }
  
  .skill-category {
    font-size: 1.25rem;
  }
  
  .skill-icon {
    width: 2.5rem;
    height: 2.5rem;
  }
}

@media (max-width: 480px) {
  .bio-text p {
    font-size: 1.5rem;
  }
  
  .skill-icons {
    justify-content: center;
    gap: 0.75rem;
  }
  
  .skill-icon {
    width: 2rem;
    height: 2rem;
  }
  
  .capability-item {
    font-size: 1rem;
  }
  
  .skill-category {
    font-size: 1rem;
  }
}
</style>