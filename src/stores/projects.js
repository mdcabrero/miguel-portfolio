// stores/projects.js
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import hundredMockup from '@/assets/graphics/hundred-mockup.png'


export const useProjectsStore = defineStore('projects', () => {
    const projects = ref([
        {
            id: 1,
            title: 'The Hundred',
            description: 'A comprehensive fitness tracking application',
            image:  hundredMockup
        },
        {
            id: 2,
            title: 'Project Two',
            description: 'Another amazing project description',
            image: hundredMockup
        }
    ])
    
    const getAllProjects = computed(() => projects.value)
    
    return {
        projects,
        getAllProjects
    }
})