import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'lenis/dist/lenis.css'
import App from './App.jsx'

const preloadCar = () => {
  const img = new Image()
  img.src = `${import.meta.env.BASE_URL}car.png`
  return img.decode()
}

Promise.all([preloadCar(), document.fonts.ready]).finally(() => {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
})
