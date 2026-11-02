import { useState } from 'react'
import { useArticulos } from '../context/ArticulosContext.js'

export default function AgregarArticulo() {
  const { agregarArticulo } = useArticulos()

  const [nombre, setNombre] = useState('')
  const [marca, setMarca] = useState('')
  const [tipo, setTipo] = useState('')

  function manejarEnvio(evento) {
    evento.preventDefault()

    const articulo = {
      nombre: nombre.trim(),
      marca: marca.trim(),
      tipo: tipo.trim(),
    }

    if (!articulo.nombre || !articulo.marca || !articulo.tipo) {
      return
    }

    agregarArticulo(articulo)

    setNombre('')
    setMarca('')
    setTipo('')
  }

  return (
    <section className="max-w-xl">
      <h1>Agregar artículo</h1>

      <p>
        Ingresa los datos del producto que quieres registrar
        en el inventario.
      </p>

      <form onSubmit={manejarEnvio} className="mt-6 flex flex-col gap-4">
        <div>
          <label htmlFor="nombre" className="mb-1 block font-medium">
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            value={nombre}
            onChange={(evento) => setNombre(evento.target.value)}
            required
            className="w-full rounded border border-slate-300 p-2"
          />
        </div>

        <div>
          <label htmlFor="marca" className="mb-1 block font-medium">
            Marca
          </label>
          <input
            id="marca"
            type="text"
            value={marca}
            onChange={(evento) => setMarca(evento.target.value)}
            required
            className="w-full rounded border border-slate-300 p-2"
          />
        </div>

        <div>
          <label htmlFor="tipo" className="mb-1 block font-medium">
            Tipo de producto
          </label>
          <input
            id="tipo"
            type="text"
            value={tipo}
            onChange={(evento) => setTipo(evento.target.value)}
            required
            className="w-full rounded border border-slate-300 p-2"
          />
        </div>

        <button
          type="submit"
          className="w-fit rounded bg-slate-800 px-4 py-2 font-medium text-white hover:bg-slate-700"
        >
          Agregar artículo
        </button>
      </form>
    </section>
  )
}