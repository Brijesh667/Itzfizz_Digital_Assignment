import { gsap, useGSAP } from '../lib/gsap'

export function useCarScroll(scopeRef) {
  useGSAP(
    () => {
      // Scroll motion is user-driven, so it is not gated on prefers-reduced-motion
      const tl = gsap.timeline({
        defaults: { ease: 'none', duration: 1 },
        scrollTrigger: {
          trigger: '.hero-track',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          invalidateOnRefresh: true,
        },
      })

      tl.to(
        '.car-group',
        {
          x: () => window.innerWidth * 0.5,
        },
        0
      )
        .to(
          '.lane-line',
          {
            x: (index) => -window.innerWidth * (index === 0 ? 0.35 : 0.5),
          },
          0
        )
        .from(
          '.speed-streak',
          {
            scaleX: 0,
            opacity: 0,
            duration: 0.3,
            stagger: 0.06,
          },
          0
        )
        .to(
          '.headline',
          {
            y: -80,
            opacity: 0.25,
          },
          0
        )
        .to(
          '.scroll-hint',
          {
            opacity: 0,
            duration: 0.08,
          },
          0
        )
        .from(
          '.scroll-fill',
          {
            scaleY: 0,
          },
          0
        )
        .to(
          '.progress-value',
          {
            textContent: 100,
            snap: { textContent: 1 },
          },
          0
        )
    },
    { scope: scopeRef }
  )
}
