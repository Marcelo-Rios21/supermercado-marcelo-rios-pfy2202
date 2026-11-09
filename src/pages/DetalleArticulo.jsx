import { Link, useParams } from 'react-router'
import { useArticulos } from '../context/ArticulosContext.js'

export default function DetalleArticulo() {
  const { id } = useParams()
  const { articulos, agregarAlCarrito } = useArticulos()

  const articulo = articulos.find(
    (item) => item.id === Number(id)
  )

  if (!articulo) {
    return (
      <section>
        <h1>Artículo no encontrado</h1>
        <Link to="/inventario">Volver al inventario</Link>
      </section>
    )
  }

  return (
    <section className="max-w-xl">
      <h1>Detalle del artículo</h1>

      <div className="mt-6 rounded border border-slate-300 p-4">
        <h2 className="text-xl font-semibold">{articulo.nombre}</h2>

        <p><strong>Marca:</strong> {articulo.marca}</p>
        <p><strong>Categoría:</strong> {articulo.tipo}</p>
        <p>
          <strong>Cantidad disponible:</strong> {articulo.cantidadDisponible}
        </p>

        <button
          type="button"
          onClick={() => agregarAlCarrito(articulo.id)}
          disabled={articulo.cantidadDisponible === 0}
          className="mt-4 rounded bg-slate-800 px-4 py-2 text-white hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Agregar al carrito
        </button>
      </div>

      <Link
        to="/inventario"
        className="mt-4 inline-block text-slate-800 underline"
      >
        Volver al inventario
      </Link>
    </section>
  )
}