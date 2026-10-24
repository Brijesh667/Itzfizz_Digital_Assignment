import Hero from './components/Hero'
import { useSmoothScroll } from './hooks/useSmoothScroll'

export default function App() {
  useSmoothScroll()

  return (
    <main>
      <Hero />
    </main>
  )
}
