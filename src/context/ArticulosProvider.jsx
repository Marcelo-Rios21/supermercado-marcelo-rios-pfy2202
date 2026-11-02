import { useState } from 'react'
import { ArticulosContext } from './ArticulosContext.js'

export function ArticulosProvider({ children }) {
  const [articulos, setArticulos] = useState([])

  function agregarArticulo(datos) {
    setArticulos((actuales) => [
      ...actuales,
      {
        id: actuales.length + 1,
        ...datos,
      },
    ])
  }

  return (
    <ArticulosContext.Provider value={{ articulos, agregarArticulo }}>
      {children}
    </ArticulosContext.Provider>
  )
}