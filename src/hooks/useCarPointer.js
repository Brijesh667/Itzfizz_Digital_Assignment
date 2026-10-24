import { gsap, useGSAP } from '../lib/gsap'

// Glow shifts in opposite direction of the car to create depth
const PARALLAX = {
  carX: 14,
  carY: 10,
  carRotation: 1.5,
  glowX: -24,
  glowY: -16,
}

const QUICK_TO_CONFIG = { duration: 0.9, ease: 'power3.out' }

export function useCarPointer(scopeRef) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add(
        '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)',
        () => {
          const car = scopeRef.current?.querySelector('.hero-car')
          const glow = scopeRef.current?.querySelector('.car-glow')

          if (!car || !glow) return

          const setCarX = gsap.quickTo(car, 'x', QUICK_TO_CONFIG)
          const setCarY = gsap.quickTo(car, 'y', QUICK_TO_CONFIG)
          const setCarRot = gsap.quickTo(car, 'rotation', QUICK_TO_CONFIG)
          const setGlowX = gsap.quickTo(glow, 'x', QUICK_TO_CONFIG)
          const setGlowY = gsap.quickTo(glow, 'y', QUICK_TO_CONFIG)

          const handlePointerMove = (event) => {
            const nx = (event.clientX / window.innerWidth - 0.5) * 2
            const ny = (event.clientY / window.innerHeight - 0.5) * 2

            setCarX(nx * PARALLAX.carX)
            setCarY(ny * PARALLAX.carY)
            setCarRot(nx * PARALLAX.carRotation)
            setGlowX(nx * PARALLAX.glowX)
            setGlowY(ny * PARALLAX.glowY)
          }

          const handlePointerLeave = () => {
            setCarX(0)
            setCarY(0)
            setCarRot(0)
            setGlowX(0)
            setGlowY(0)
          }

          window.addEventListener('pointermove', handlePointerMove, { passive: true })
          document.documentElement.addEventListener('pointerleave', handlePointerLeave)

          return () => {
            window.removeEventListener('pointermove', handlePointerMove)
            document.documentElement.removeEventListener('pointerleave', handlePointerLeave)
          }
        }
      )

      return () => mm.revert()
    },
    { scope: scopeRef }
  )
}
