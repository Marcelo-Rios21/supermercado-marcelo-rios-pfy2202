import { createContext, useContext } from 'react'

export const ArticulosContext = createContext(null)

export function useArticulos() {
  return useContext(ArticulosContext)
}