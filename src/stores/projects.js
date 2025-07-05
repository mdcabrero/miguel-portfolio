// stores/projects.js
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import hundredMockup from '@/assets/graphics/hundred-mockup.png'
import globlMockup from '@/assets/graphics/globl-mockup.png'
import voxelMockup from '@/assets/graphics/voxel-mockup.png'


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
            title: 'GLOBL Tech',
            description: 'Another amazing project description',
            image: hundredMockup
        },
        {
            id: 3,
            title: 'Voxel Labs',
            description: 'Another amazing project description',
            image: voxelMockup
        }
    ])
    
    const getAllProjects = computed(() => projects.value)
    
    return {
        projects,
        getAllProjects
    }
})