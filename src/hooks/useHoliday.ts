import { useEffect, useState } from 'react'
import { type HolidaysResults } from '../types'
import { localHolidays } from '../utils'

export const UseHoliday = () => {
  const [holidays, setHolidays] = useState<HolidaysResults[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<boolean | null>(null)

  useEffect(() => {
    setLoading(true)
    fetch('http://nolaborables.com.ar/api/v2/feriados/2024', { method: 'GET' })
      .then(async (res) => await res.json())
      .then((data) => {
        setHolidays(data)
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return {
    // change to test the api
    holidays: holidays.length > 0 ? holidays : localHolidays,
    loading,
    error
  }
}
