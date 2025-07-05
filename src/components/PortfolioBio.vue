<template>
 <section  class="portfolio-bio" ref="portfolioBioRef"> 
    <div class="bio">
      <span> About </span>
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
          <img src="../assets/icons/html.svg" alt="HTML5" class="skill-icon">
          <img src="../assets/icons/css.svg" alt="CSS3" class="skill-icon">
          <img src="../assets/icons/sass.svg" alt="Sass" class="skill-icon sass">
           <img src="../assets/icons/gsap.svg" alt="GSAP" class="skill-icon wide-icon gsap">
          <img src="../assets/icons/javascript.svg" alt="JavaScript" class="skill-icon">
          <img src="../assets/icons/nodejs.svg" alt="Node.js" class="skill-icon">
          <img src="../assets/icons/vue.svg" alt="Vue.js" class="skill-icon">
         
      
        </div>
      </div>

      <!-- Design Tools Row -->
      <div class="skill-row">
        <h3 class="skill-category">Design Tools</h3>
        <div class="skill-icons">
          <img src="../assets/icons/figma.svg" alt="Figma" class="skill-icon figma">
          <img src="../assets/icons/affinity-photo.svg" alt="Affinity Photo" class="skill-icon">
          <img src="../assets/icons/affinity-designer.svg" alt="Affinity Designer" class="skill-icon">
          <img src="../assets/icons/blender.svg" alt="Blender" class="skill-icon blender">
          <img src="../assets/icons/midjourney.svg" alt="Midjourney" class="skill-icon midjourney">
        </div>
      </div>

      <!-- Other Row -->
      <div class="skill-row">
        <h3 class="skill-category">AI APIs</h3>
        <div class="skill-icons">
          <img src="../assets/icons/anthropic.svg" alt="Anthropic" class="skill-icon ai-icon">
          <img src="../assets/icons/openai.svg" alt="OpenAI" class="skill-icon ai-icon ">
          <img src="../assets/icons/perplexity.svg" alt="Perplexity" class="skill-icon ai-icon">
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


<script setup>
import { ref, onMounted } from 'vue'
import { usePortfolioBioFadeBlur } from '@/utils/animations.js' // Choose your animation

const portfolioBioRef = ref(null)
const { initPortfolioBioAnimation } = usePortfolioBioFadeBlur()

onMounted(() => {
    initPortfolioBioAnimation(portfolioBioRef.value)
})
</script>


<style scoped>

.bio {
  margin-bottom: 4rem;
}

.bio span {
  font-size: 1.5rem;
  color: #c8d7e5cc;

}

.bio p {
  font-size: 3rem;
  line-height: 1.2;
  margin-top: 0.75rem;
  font-weight: 300;
  will-change: opacity;
 
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
  transition: all 0.3s ease;
}

.skill-row:first-child {
  border-top: 1px solid #ffffff84;
}

.skill-row:last-child {
  border-bottom: none;
}

.skill-category {
  font-size: 2.1rem;
  font-weight: 400;
  margin: 0;
  color: #fff;
}

.skill-icons {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: end;
  transition: filter 0.35s ease;
}


.skill-icon {
  width: 3.5rem;
  height: 4.5rem;
  filter: grayscale(100%);
  object-fit: contain;
  transition: filter 0.4s ease, transform 0.5s ease;
  transform: scale(1);
}

/* Standard hover effect for regular icons */
.skill-row:hover .skill-icon {
  filter:  grayscale(0%);
  transform: scale(1.02);
}


/* Size adjustments for some particular icons */

.sass {
  width: auto;
  height: 3.5rem;
}


.gsap {
  width: auto;
  height: 2.5rem;
}

.figma {
  width: auto;
  height: 3.75rem;
}

.blender {
  width: auto;
  height: 3.5rem;
}

.midjourney {
  filter: brightness(75%);
}

.skill-row:hover .midjourney {
  filter: brightness(100%);
  transform: scale(1.03);
}



/* AI icon specific styles */
.ai-icon {
  width: 3.75rem;
  height: 3.25rem;
  filter: brightness(75%);
}

.skill-row:hover .ai-icon {
  filter: brightness(100%);
  transform: scale(1.02);
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
  font-size: 1.9rem;
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