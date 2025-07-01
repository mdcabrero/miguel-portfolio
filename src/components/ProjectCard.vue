<template>
    <article class="project-card">
        <div class="project-bio">
            <h2 class="project-title">{{ project.title }}</h2>
            <p class="project-description">{{ project.description }}</p>
        </div>
        
        <div class="project-preview">
            <img :alt="`${project.title} project preview`" :src="project.image" class="project-image">
        </div>
    </article>
</template>

<script setup>
defineProps({
    project: {
        type: Object,
        required: true
    }
})
</script>

<style scoped>


.project-card {
    position: relative;
      display: grid;
    grid-template-rows: auto 1fr;
    width: 75vw;
    background: linear-gradient(135deg, 
        #000000 0%, 
        #18181e 25%, 
        #06080a 50%, 
        #050509 75%, 
        #070707 100%);
    border: 1px solid rgba(103, 106, 154, 0.267);
    border-radius: 1.5rem;
    overflow: hidden;
    box-shadow: 0px 0px 4px 0px rgba(66, 66, 81, 0.4)

}

.project-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
        rgba(255, 255, 255, 0.03) 0%,
        rgba(255, 255, 255, 0.01) 50%,
        rgba(255, 255, 255, 0.05) 100%);
    pointer-events: none;
}

.project-card:not(:first-child) {
    margin-top: 5rem;
}



.project-bio {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-block: 4rem;
    margin-inline: 3rem;
}

.project-title {
    font-size: 2.5rem;
    font-weight: 500;
}

.project-description {
    font-size: 1.5rem;
    font-weight: 300;
}


.project-preview {
    grid-row: 2;
    display: flex;
    width: 80%;
    justify-self: center;
    margin-bottom: -5%; /* Add negative spacing effect*/
}

</style>