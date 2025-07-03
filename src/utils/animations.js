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
  const initProjectCardAnimation = (cardElement, cardIndex = 0) => {
    if (!cardElement) return
    
    // Set initial state
    gsap.set(cardElement, { width: '65%' })
    
    // Create ScrollTrigger animation linked to scroll
    gsap.to(cardElement, {
      width: '70%',
      ease: 'none', // Linear easing for smooth scroll-linked animation
      scrollTrigger: {
        trigger: cardElement,
        start: 'top 70%',
        end: '70% bottom',
        scrub: 1 // Link animation to scroll position
      }
    })
  }

  return { initProjectCardAnimation }
}

