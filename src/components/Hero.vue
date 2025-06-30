<template>
<header class="hero"> 
    <Navigation/>
    <div class="hero-content">
        <p class="hero-subtitle">Designer and developer of web experiences <br> from concept to product</p>
  
        <h1 class="hero-title">Miguel Dominguez</h1>
    </div>
</header>

</template>

<script setup>
import Navigation from '@/components/Navigation.vue'
</script>


<style scoped>

.hero::after {
    content: '';
    position: absolute;
    top: -12.5vh;
    right: max(-22vw, -400px);    /* Reduced from -25vw, -300px */
    width: min(1400px, 85vw);     /* Increased from 85vw */
    height: 90%;
    background-image: url('../assets/graphics/chrome-glass.png');
    background-size: contain;
    background-repeat: no-repeat;
    z-index: 1;
    pointer-events: none;
}

.hero-content {
    text-align: center;
}

.hero-title {
    font-weight: 500;
    font-size: 10vw;
    letter-spacing: -0.25vw;
}

.hero-subtitle {
    line-height: 1.1;
    font-size: 2.5rem;
    font-weight: 300;
}

</style> 
