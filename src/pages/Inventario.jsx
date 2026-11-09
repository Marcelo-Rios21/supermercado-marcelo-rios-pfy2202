import { useState } from 'react'
import { Link } from 'react-router'
import { useArticulos } from '../context/ArticulosContext.js'

export default function Inventario() {
  const { articulos } = useArticulos()
  const [categoria, setCategoria] = useState('')

  const categorias = [...new Set(
    articulos.map((articulo) => articulo.tipo)
  )]

  const articulosFiltrados = categoria
    ? articulos.filter((articulo) => articulo.tipo === categoria)
    : articulos

  return (
    <section>
      <h1>Listado de inventario</h1>

      <p>Artículos registrados en el supermercado.</p>

      <div className="mt-6">
        <label htmlFor="categoria" className="mb-2 block font-medium">
          Filtrar por categoría
        </label>

        <select
          id="categoria"
          value={categoria}
          onChange={(evento) => setCategoria(evento.target.value)}
          className="w-full max-w-xs rounded border border-slate-300 p-2"
        >
          <option value="">Todas las categorías</option>

          {categorias.map((tipo) => (
            <option key={tipo} value={tipo}>
              {tipo}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-100">
              <th>Nombre</th>
              <th>Marca</th>
              <th>Tipo de producto</th>
              <th>Cantidad disponible</th>
            </tr>
          </thead>

          <tbody>
            {articulosFiltrados.length === 0 ? (
              <tr>
                <td colSpan="4">
                  Todavía no hay artículos registrados.
                </td>
              </tr>
            ) : (
              articulosFiltrados.map((articulo) => (
                <tr key={articulo.id}>
                  <td>
                    <Link
                      to={`/inventario/${articulo.id}`}
                      className="font-medium text-slate-800 underline"
                    >
                      {articulo.nombre}
                    </Link>
                  </td>
                  <td>{articulo.marca}</td>
                  <td>{articulo.tipo}</td>
                  <td>{articulo.cantidadDisponible}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  )
}