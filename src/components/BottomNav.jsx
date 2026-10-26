import { NavLink } from 'react-router'

export default function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="Navegación principal">
      <NavLink to="/" end>Inicio</NavLink>
      <NavLink to="/quienes-somos">Quiénes somos</NavLink>
      <NavLink to="/contactanos">Contáctanos</NavLink>
    </nav>
  )
}