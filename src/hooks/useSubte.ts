import { useEffect, useState } from 'react'
import { type SubteElement, type SubteElementFromFetch } from '../types'

export const UseSubte = () => {
  const [subtes, setSubtes] = useState<SubteElement[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<boolean | null>(null)

  useEffect(() => {
    setLoading(true)
    fetch('https://buenosaires.gob.ar/subtes', {
      method: 'GET'
    })
      .then(async (res) => await res.json())
      .then((data) => {
        const newSubtes = data.subtes.map((subte: SubteElementFromFetch) => ({
          nombre: subte.nombre,
          estado: subte.estado[0] === '\n\t\t' ? 'Normal' : 'Demorado',
          frecuencia: subte.frecuencia
        }))
        setSubtes(newSubtes)
      })
      .catch((err) => {
        setError(err)
        throw new Error(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return {
    subtes,
    loading,
    error
  }
}
