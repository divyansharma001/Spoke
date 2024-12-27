import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'
import { Spotlight } from './components/ui/Spotlight.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#ffffea"
      />
    <Navbar/>
    <App />
    <Footer/>
  </StrictMode>,
)
