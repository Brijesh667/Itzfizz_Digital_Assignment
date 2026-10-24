import { gsap, useGSAP } from '../lib/gsap'

const STAT_STAGGER = 0.18

export function useHeroIntro(scopeRef) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // Scroll animation moves .car-group, so intro animation only controls opacity and scale
        const tl = gsap.timeline({
          defaults: { ease: 'power3.out' },
        })

        tl.from('.hero-car, .car-glow', {
          opacity: 0,
          scale: 0.92,
          duration: 1.4,
        })
          .from('.lane-line', { opacity: 0, duration: 1.2 }, 0)
          .from(
            '.headline-char',
            {
              opacity: 0,
              y: 50,
              duration: 1,
              stagger: 0.05,
            },
            0.2
          )
          .addLabel('stats', '-=0.5')
          .from(
            '.stat-item',
            {
              opacity: 0,
              y: 30,
              duration: 0.9,
              stagger: STAT_STAGGER,
              ease: 'power2.out',
            },
            'stats'
          )

        gsap.utils.toArray('.stat-number').forEach((el, i) => {
          tl.from(
            el,
            {
              textContent: 0,
              snap: { textContent: 1 },
              duration: 1.6,
              ease: 'power1.out',
            },
            `stats+=${i * STAT_STAGGER}`
          )
        })

        tl.from('.scroll-indicator', { opacity: 0, duration: 0.8 }, '-=0.4')
      })

      return () => mm.revert()
    },
    { scope: scopeRef }
  )
}
