import { useArticulos } from '../context/ArticulosContext.js'

export default function Inventario() {
  const { articulos } = useArticulos()

  return (
    <section>
      <h1>Listado de inventario</h1>

      <p>Artículos registrados en el supermercado.</p>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-100">
              <th>Nombre</th>
              <th>Marca</th>
              <th>Tipo de producto</th>
            </tr>
          </thead>

          <tbody>
            {articulos.length === 0 ? (
              <tr>
                <td colSpan="3">
                  Todavía no hay artículos registrados.
                </td>
              </tr>
            ) : (
              articulos.map((articulo) => (
                <tr key={articulo.id}>
                  <td>{articulo.nombre}</td>
                  <td>{articulo.marca}</td>
                  <td>{articulo.tipo}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  )
}