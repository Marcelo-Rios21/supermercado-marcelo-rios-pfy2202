import { NavLink } from 'react-router'

export default function InventoryNav() {
  const estilo = ({ isActive }) =>
    `inline-block rounded-md px-4 py-2 text-sm font-medium no-underline ${
      isActive
        ? 'bg-slate-800 text-white'
        : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
    }`

  return (
    <nav
      className="mb-8 flex flex-wrap gap-3"
      aria-label="Gestión de inventario"
    >
      <NavLink to="/agregar-articulo" className={estilo}>
        Agregar artículo
      </NavLink>

      <NavLink to="/inventario" className={estilo}>
        Ver inventario
      </NavLink>
    </nav>
  )
}