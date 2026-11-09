import { useArticulos } from '../context/ArticulosContext.js'

export default function Carrito() {
  const {
    articulos,
    carrito,
    agregarAlCarrito,
    disminuirDelCarrito,
  } = useArticulos()

  const articulosEnCarrito = carrito.map((item) => ({
    ...item,
    articulo: articulos.find(
      (articulo) => articulo.id === item.idArticulo
    ),
  }))

  return (
    <section>
      <h1>Carrito de compras</h1>

      {carrito.length === 0 ? (
        <p>Todavía no hay artículos en el carrito.</p>
      ) : (
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-100">
                <th>Nombre</th>
                <th>Marca</th>
                <th>Tipo de producto</th>
                <th>Cantidad</th>
              </tr>
            </thead>

            <tbody>
              {articulosEnCarrito.map((item) => (
                <tr key={item.idArticulo}>
                  <td>{item.articulo.nombre}</td>
                  <td>{item.articulo.marca}</td>
                  <td>{item.articulo.tipo}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => disminuirDelCarrito(item.idArticulo)}
                        aria-label={`Disminuir ${item.articulo.nombre}`}
                        className="rounded border border-slate-300 px-3 py-1 hover:bg-slate-100"
                      >
                        -
                      </button>

                      <span>{item.cantidad}</span>

                      <button
                        type="button"
                        onClick={() => agregarAlCarrito(item.idArticulo)}
                        disabled={item.articulo.cantidadDisponible === 0}
                        aria-label={`Aumentar ${item.articulo.nombre}`}
                        className="rounded border border-slate-300 px-3 py-1 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        +
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}