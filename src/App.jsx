import { BrowserRouter, Routes, Route } from 'react-router'
import BottomNav from './components/BottomNav.jsx'
import Home from './pages/Home.jsx'
import QuienesSomos from './pages/QuienesSomos.jsx'
import Contactanos from './pages/Contactanos.jsx'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <div className="aplicacion">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/contactanos" element={<Contactanos />} />
          </Routes>
        </main>

        <BottomNav />
      </div>
    </BrowserRouter>
  )
}