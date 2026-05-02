import gsap from 'gsap';


/**
 * Animate a route transition using a simultaneous crossfade.
 * leaveEl is a fixed-position clone already in the DOM.
 * enterEl is the newly activated route host element.
 */
export function animateRouteTransition(
  enterEl: HTMLElement,
  leaveEl: HTMLElement,
): Promise<void> {
  // New view starts invisible underneath the clone
  gsap.set(enterEl, { opacity: 0 });

  return new Promise(resolve => {
    const tl = gsap.timeline({ onComplete: resolve });
    // Sequential: fade OUT the old view, then fade IN the new one
    tl.to(leaveEl, { opacity: 0, duration: 0.25, ease: 'power1.inOut' });
    tl.to(enterEl, { opacity: 1, duration: 0.25, ease: 'power1.inOut' });
  });
}

