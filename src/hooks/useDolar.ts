import { useEffect, useState } from 'react'
import { type Dolar } from '../types'

export const UseDolar = () => {
  const [dolar, setDolar] = useState<Dolar[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<boolean | null>(null)

  useEffect(() => {
    setLoading(true)
    fetch('https://dolarapi.com/v1/dolares')
      .then(async (res) => await res.json())
      .then((data) => {
        setDolar(data)
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
    dolar,
    loading,
    error
  }
}
