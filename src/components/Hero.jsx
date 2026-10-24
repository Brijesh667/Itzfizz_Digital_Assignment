import { useRef } from 'react'
import Headline from './Headline'
import CarScene from './CarScene'
import Stats from './Stats'
import ScrollIndicator from './ScrollIndicator'
import { useHeroIntro } from '../hooks/useHeroIntro'
import { useCarScroll } from '../hooks/useCarScroll'
import { useCarPointer } from '../hooks/useCarPointer'

export default function Hero() {
  const sectionRef = useRef(null)

  useHeroIntro(sectionRef)
  useCarScroll(sectionRef)
  useCarPointer(sectionRef)

  return (
    <section ref={sectionRef} className="hero-track relative h-[300vh]">
      <div className="hero-stage sticky top-0 h-svh overflow-hidden bg-[#0a0a0a] bg-[radial-gradient(ellipse_at_center,_#1c1c1c_0%,_#0a0a0a_75%)]">
        <Headline />
        <CarScene />
        <Stats />
        <ScrollIndicator />
      </div>
    </section>
  )
}
