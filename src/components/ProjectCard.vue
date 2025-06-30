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
      display: grid;
    grid-template-rows: auto 1fr;
    width: 75vw;
    background-color: rgb(0, 0, 31);
    border-radius: 1.5rem;
    overflow: hidden;
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
    width: 85%;
    justify-self: center;
    margin-bottom: -5%; /* Add negative spacing effect*/
}

</style>