<template>
    <article class="project-card" ref="projectCardRef" @click="$emit('cardClick')">

        <header class="project-bio">
        <div class="bio-divider"> 
            <h2 class="project-title">{{ project.title }}  </h2>
            <span class="click-cue"> 
             &#x25C9; Live Site 
            </span>
        </div>
            <p class="project-description">{{ project.description }} </p>
        </header>
        
        <div class="project-preview">
            <img :alt="`${project.title} project preview`" :src="project.image" class="project-image">
        </div>
    </article>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useProjectCardAnimation } from '@/utils/animations.js'

defineProps({
    project: {
        type: Object,
        required: true
    }
})




const projectCardRef = ref(null)
const { initProjectCardAnimation } = useProjectCardAnimation()

onMounted(() => {
    initProjectCardAnimation(projectCardRef.value)
})
</script>

<style scoped>


.project-card {
    position: relative;
    display: grid;
    grid-template-rows: auto 1fr;
    will-change: width;
    transform: translateZ(0); /* Force GPU acceleration */
    backface-visibility: hidden;
    cursor: pointer;
  background: linear-gradient(100deg, 
    #08090d 0%,
    #111318 25%,
    #040506 45%,
    #0f1115 75%,
    #000000 100%);
    border: 1px solid rgba(103, 106, 154, 0.267);
    border-radius: 1.5rem;
    overflow: hidden;
   box-shadow: 
   /* Main shadow */
                0px 0px 4px rgba(79, 106, 195, 0.306),
                inset 0 1.25px 0 rgba(149, 164, 224, 0.55),
                inset 0 -3px 0 rgba(24, 30, 66, 0.25);
        }


.project-card::before {
    content: '';
    position: absolute;
    inset: 0;
    padding: 1.5px;
    background: linear-gradient(
        240deg,
        transparent 0%,
        transparent 25%,
        transparent 50%,
        transparent 75%,
        transparent 85%,
        rgba(157, 179, 212, 0.701) 100%
    );
    border-radius: 1.6rem;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: exclude;
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    opacity: 1;


}


.project-card::after {
    content: '';
    position: absolute;
    inset: 2px;
    border-radius: 1.3rem;
    background: linear-gradient(
        135deg,
        rgba(61, 94, 133, 0.15) 0%,
        rgba(109, 116, 131, 0.08) 25%,
        transparent 50%,
        rgba(0, 0, 0, 0.08) 75%,
        rgba(0, 0, 0, 0.25) 100%
    );
    pointer-events: none;
    z-index: 1;
    opacity: 0.25;
}


.project-card:not(:first-child) {
    margin-top: 8rem;
}



.project-bio {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 4rem;
    margin-bottom: 3rem;
    margin-inline: 4rem;
}

.bio-divider {
    display: inline-flex;
    justify-content: space-between;
    align-items: start;
}

.click-cue {
    display: inline-flex;
    gap: 0.25rem;
    font-family: Arial, Helvetica, sans-serif;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.9rem;
   color: #d1d8e8d8;
    text-shadow:
      0 0 4.5px #7795d1;

    
}


.project-title {
    color: #EDEEF0;
    font-size: 3rem;
    font-weight: 500;
     text-shadow:
      0 0 3px #e0e9ee5d,
      0 0 4.5px #0b49c5;
}

.arrow-redirect {
    opacity: 0;
    font-family:Georgia, 'Times New Roman', Times, serif;
    margin-left: 0.5rem;
    transition: 0.5s ease-out;


}


.project-description {
    font-size: 1.5rem;
    font-weight: 300;
    color: #b7bfce;
}


.project-preview {
    grid-row: 2;
    display: flex;
    width: 75%;
    margin-inline: auto;
    margin-bottom: -2rem;
    transition: filter 0.65s ease-in;
}

.project-card:hover .project-preview {
  filter: saturate(165%) brightness(110%);
}



</style>