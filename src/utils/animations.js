// composables/useGsapAnimations.js
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { onMounted, onUnmounted, nextTick } from 'vue'

// Register plugins once
gsap.registerPlugin(ScrollTrigger, SplitText)

/**
 * Base GSAP composable with common utilities
 */
export function useGsapBase() {
  const animations = []
  const scrollTriggers = []
  const splitTextInstances = []
  const hasAnimated = new Set() // Track which elements have already animated

  const cleanup = () => {
    animations.forEach(animation => animation.kill())
    scrollTriggers.forEach(trigger => trigger.kill())
    splitTextInstances.forEach(instance => instance.revert())
    animations.length = 0
    scrollTriggers.length = 0
    splitTextInstances.length = 0
    hasAnimated.clear()
  }

  const waitForFonts = () => {
    return new Promise((resolve) => {
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(resolve)
      } else {
        setTimeout(resolve, 500)
      }
    })
  }

  onUnmounted(cleanup)

  return {
    animations,
    scrollTriggers,
    splitTextInstances,
    hasAnimated,
    cleanup,
    waitForFonts
  }
}

/**
 * Project card animation composable - Play once only
 */
export function useProjectCardAnimation() {
  const { animations, scrollTriggers, hasAnimated } = useGsapBase()

  const initProjectCardAnimation = async (cardElement, cardIndex = 0) => {
    await nextTick()
    
    if (!cardElement) return
    
    // Create reliable unique identifier using index + title
    const titleText = cardElement.querySelector('.project-title')?.textContent || ''
    const cardId = `card-${cardIndex}-${titleText.replace(/\s+/g, '-').toLowerCase()}`
    
    // Skip if already animated
    if (hasAnimated.has(cardId)) return


    // Create animation without scrub for cleaner, one-time execution
    const animation = gsap.to(cardElement, {
      width: '75vw',
      duration: 0.8, // Slightly longer for smoother feel
      ease: 'power2.out',
      paused: true, // Start paused
      onComplete: () => {
        // Clean up will-change after animation
        gsap.set(cardElement, { willChange: 'auto' })
      }
    })

    // Create ScrollTrigger separately for better control
    const scrollTrigger = ScrollTrigger.create({
      trigger: cardElement,
      start: 'top 30%', // Slightly earlier trigger
      once: true, // Only trigger once
      onEnter: () => {
        hasAnimated.add(cardId)
        animation.play()
      }
    })

    animations.push(animation)
    scrollTriggers.push(scrollTrigger)
  }

  return {
    initProjectCardAnimation
  }
}

/**
 * Portfolio bio and skills animation composable - Play once, synchronized
 */
export function usePortfolioBioAnimation() {
  const { animations, scrollTriggers, splitTextInstances, hasAnimated, waitForFonts } = useGsapBase()

  const initBioTextAnimation = async (bioElement) => {
    await waitForFonts()
    await nextTick()
    
    if (!bioElement) return
    
    // Skip if already animated
    if (hasAnimated.has('portfolio-bio')) return

    const bioText = bioElement.querySelector('.bio p')
    const skillsSection = bioElement.querySelector('.portfolio-skills')
    
    if (!bioText || !skillsSection) return

    // Split text into words for better flow
    const bioSplit = new SplitText(bioText, { 
      type: "words",
      wordsClass: "bio-word"
    })
    splitTextInstances.push(bioSplit)

    // Get all skill elements for synchronized animation
    const skillRows = skillsSection.querySelectorAll('.skill-row')
    const skillIcons = skillsSection.querySelectorAll('.skill-icon')

    // Set initial states
    gsap.set(bioSplit.words, { 
      opacity: 0, 
      y: 20,
      filter: 'blur(5px)'
    })
    
    gsap.set(skillRows, { 
      opacity: 0, 
      y: 30,
      filter: 'blur(3px)'
    })

    gsap.set(skillIcons, {
      opacity: 0,
      scale: 0.8
    })

    // Create master timeline for synchronized animation
    const masterTimeline = gsap.timeline({ paused: true })

    // Animate bio text with staggered smoke-like effect
    masterTimeline.to(bioSplit.words, {
      duration: 0.8,
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      stagger: {
        amount: 1.2,
        from: "start",
        ease: "power2.out"
      },
      ease: "power2.out"
    })

    // Animate skill rows with overlap
    masterTimeline.to(skillRows, {
      duration: 0.6,
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      stagger: {
        amount: 0.8,
        from: "start",
        ease: "power2.out"
      },
      ease: "power2.out"
    }, "-=0.6")

    // Animate skill icons
    masterTimeline.to(skillIcons, {
      duration: 0.4,
      scale: 1,
      opacity: 1,
      stagger: {
        amount: 0.6,
        from: "start",
        ease: "power1.out"
      },

    })

    // Set up ScrollTrigger - play once only
    const scrollTrigger = ScrollTrigger.create({
      trigger: bioElement,
      start: 'top 70%',
      once: true, // Only trigger once
      onEnter: () => {
        hasAnimated.add('portfolio-bio')
        masterTimeline.play()
      }
    })
    
    animations.push(masterTimeline)
    scrollTriggers.push(scrollTrigger)
  }

  return {
    initBioTextAnimation
  }
}

/**
 * Skills hover animation composable - Optimized for performance
 */
export function useSkillsAnimation() {
  const { animations, hasAnimated } = useGsapBase()

  const initSkillsAnimation = async (skillsElement) => {
    await nextTick()
    
    const skillRows = skillsElement?.querySelectorAll('.skill-row')
    
    if (!skillRows || skillRows.length === 0) return
    
    // Skip if already initialized
    if (hasAnimated.has('skills-hover')) return
    
    skillRows.forEach(row => {
      const icons = row.querySelectorAll('.skill-icon')
      
      if (icons.length === 0) return
      
      // Set initial grayscale state
      gsap.set(icons, { 
        filter: 'grayscale(100%) brightness(0.8)',
        scale: 1
      })
      
      // Store active animations to prevent duplicates
      let enterAnimation = null
      let leaveAnimation = null
      
      const handleMouseEnter = () => {
        // Kill any existing leave animation
        if (leaveAnimation) leaveAnimation.kill()
        
        enterAnimation = gsap.to(icons, {
          scale: 1.05,
          filter: 'grayscale(0%) brightness(1.1)',
          duration: 0.25,
          stagger: 0.03,
          ease: 'power2.out'
        })
      }
      
      const handleMouseLeave = () => {
        // Kill any existing enter animation
        if (enterAnimation) enterAnimation.kill()
        
        leaveAnimation = gsap.to(icons, {
          scale: 1,
          filter: 'grayscale(100%) brightness(0.8)',
          duration: 0.3,
          stagger: 0.02,
          ease: 'power2.out'
        })
      }
      
      row.addEventListener('mouseenter', handleMouseEnter)
      row.addEventListener('mouseleave', handleMouseLeave)
    })
    
    hasAnimated.add('skills-hover')
  }

  return {
    initSkillsAnimation
  }
}

