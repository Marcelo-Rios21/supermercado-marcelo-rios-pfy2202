import { useState } from 'react'
import { ArticulosContext } from './ArticulosContext.js'

export function ArticulosProvider({ children }) {
  const [estado, setEstado] = useState({
    articulos: [],
    carrito: [],
  })

  function agregarArticulo(datos) {
    setEstado((actual) => ({
      ...actual,
      articulos: [
        ...actual.articulos,
        {
          id: actual.articulos.length + 1,
          ...datos,
        },
      ],
    }))
  }

  function agregarAlCarrito(idArticulo) {
    setEstado((actual) => {
      const articulo = actual.articulos.find(
        (item) => item.id === idArticulo
      )

      if (!articulo || articulo.cantidadDisponible <= 0) {
        return actual
      }

      const existeEnCarrito = actual.carrito.some(
        (item) => item.idArticulo === idArticulo
      )

      return {
        articulos: actual.articulos.map((item) =>
          item.id === idArticulo
            ? {
                ...item,
                cantidadDisponible: item.cantidadDisponible - 1,
              }
            : item
        ),
        carrito: existeEnCarrito
          ? actual.carrito.map((item) =>
              item.idArticulo === idArticulo
                ? { ...item, cantidad: item.cantidad + 1 }
                : item
            )
          : [...actual.carrito, { idArticulo, cantidad: 1 }],
      }
    })
  }

  function disminuirDelCarrito(idArticulo) {
    setEstado((actual) => {
      const itemCarrito = actual.carrito.find(
        (item) => item.idArticulo === idArticulo
      )

      if (!itemCarrito || itemCarrito.cantidad <= 0) {
        return actual
      }

      return {
        articulos: actual.articulos.map((item) =>
          item.id === idArticulo
            ? {
                ...item,
                cantidadDisponible: item.cantidadDisponible + 1,
              }
            : item
        ),
        carrito:
          itemCarrito.cantidad === 1
            ? actual.carrito.filter(
                (item) => item.idArticulo !== idArticulo
              )
            : actual.carrito.map((item) =>
                item.idArticulo === idArticulo
                  ? { ...item, cantidad: item.cantidad - 1 }
                  : item
              ),
      }
    })
  }

  return (
    <ArticulosContext.Provider
      value={{
        articulos: estado.articulos,
        carrito: estado.carrito,
        agregarArticulo,
        agregarAlCarrito,
        disminuirDelCarrito,
      }}
    >
      {children}
    </ArticulosContext.Provider>
  )
}