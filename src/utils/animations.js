// composables/useGsapAnimations.js
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { onUnmounted } from 'vue'

// Register plugins once
gsap.registerPlugin(ScrollTrigger, SplitText)

/**
 * Project card width animation - Linked to scroll position
 */
export function useProjectCardAnimation() {
  const initProjectCardAnimation = (cardElement) => {
    const clickCue = cardElement.querySelector('.click-cue')
    
    // Set initial state
    gsap.set(cardElement, { width: '62.5vw' })
      gsap.set(clickCue, { 
      opacity: 0, 
      filter: 'blur(7px)'
    })
    
    // Create ScrollTrigger animation linked to scroll
    gsap.to(cardElement, {
      width: '70vw',
      ease: 'none', // Linear easing for smooth scroll-linked animation
      scrollTrigger: {
        trigger: cardElement,
        start: 'top 30%',
        end: '90% 90%',
        scrub: 1 // Link animation to scroll position
      }
    })

     const hoverAnimation = gsap.fromTo(clickCue, {
      opacity: 0,
      filter: 'blur(6px)'
    }, {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
      delay: 0.5,
      paused: true
    })
    
    cardElement.addEventListener('mouseenter', () => hoverAnimation.play())
    cardElement.addEventListener('mouseleave', () => hoverAnimation.reverse())
  }


  return { initProjectCardAnimation }
}





export function usePortfolioBioFadeBlur() {
  const initPortfolioBioAnimation = (bioElement) => {
    // Separate text elements from images
    const textElements = bioElement.querySelectorAll('p, h2, h3, span, div')
    const imageElements = bioElement.querySelectorAll('img')
    const portfolioBio = document.getElementById('portfolio-bio')

    

    // Create a timeline to synchronize both animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: portfolioBio,
        start: "top+=132 33%",
        end: "bottom 70%",
        scrub: false,
        toggleActions: "play none none reverse",
      }
    })

    // Add text animation with blur effect
      tl.fromTo(textElements, {
        opacity: 0,
        filter: "blur(5px)"
      }, {
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "power2.out",
        stagger: {
          each: 0.1,
          from: "start"
        }
      }, 0) // Start at time 0
    

    // Add image animation (opacity only)
      tl.fromTo(imageElements, {
        opacity: 0
      }, {
        opacity: 1,
        duration: 0.9,
        ease: "power2.out",
        stagger: {
          each: 0.17,
          from: "start"
        }
      }, 0.2) // Start at time 0 (same time as text)
  }

  return { initPortfolioBioAnimation }
}