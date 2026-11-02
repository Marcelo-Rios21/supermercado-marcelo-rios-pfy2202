import { BrowserRouter, Routes, Route } from 'react-router'
import BottomNav from './components/BottomNav.jsx'
import InventoryNav from './components/InventoryNav.jsx'
import Home from './pages/Home.jsx'
import QuienesSomos from './pages/QuienesSomos.jsx'
import Contactanos from './pages/Contactanos.jsx'
import AgregarArticulo from './pages/AgregarArticulo.jsx'
import Inventario from './pages/Inventario.jsx'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <div className="aplicacion">
        <main>
          <InventoryNav />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/contactanos" element={<Contactanos />} />
            <Route path="/agregar-articulo" element={<AgregarArticulo />} />
            <Route path="/inventario" element={<Inventario />} />
          </Routes>
        </main>

        <BottomNav />
      </div>
    </BrowserRouter>
  )
}