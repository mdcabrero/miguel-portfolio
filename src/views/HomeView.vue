<script setup>
import Hero from '@/components/Hero.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import PortfolioBio from '@/components/PortfolioBio.vue'
import Footer from '@/components/Footer.vue'

import { useProjectsStore } from '@/stores/projects.js'


const projectsStore = useProjectsStore()
const projects = projectsStore.getAllProjects

</script>

<template>
  <Hero />
  <main>
    <ProjectCard  
     v-for="project in projects" 
            :key="project.id"
            :project="project"
            />
    <PortfolioBio />
  </main>
  <Footer />
</template>
