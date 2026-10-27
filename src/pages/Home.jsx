export default function Home() {
  return (
    <section>
      <h1>Inventario del supermercado</h1>

      <p>
        Aquí puedes revisar una muestra de los productos que maneja
        el supermercado. Cada artículo tiene su categoría y la
        cantidad de unidades registradas.
      </p>

      <h2>Productos en inventario</h2>
      <p>Los productos y cantidades mostrados son datos de ejemplo.</p>

      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Categoría</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Arroz 1 kg</td>
            <td>Abarrotes</td>
            <td>40</td>
          </tr>
          <tr>
            <td>Leche 1 L</td>
            <td>Lácteos</td>
            <td>25</td>
          </tr>
          <tr>
            <td>Manzanas</td>
            <td>Frutas</td>
            <td>18</td>
          </tr>
          <tr>
            <td>Detergente 1 L</td>
            <td>Limpieza</td>
            <td>12</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}