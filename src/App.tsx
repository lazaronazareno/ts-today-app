import './App.css'
import { type UtilDate } from './types'
import WeatherItem from './components/WeatherItem'
import Holiday from './components/Holiday'
import DolarComponent from './components/Dolar'
import UsefulDates from './components/UsefulDates'
import { UseWeather } from './hooks/useWeather'
import { UseHoliday } from './hooks/useHoliday'
import { UseDolar } from './hooks/useDolar'
import Footer from './components/Footer'

const INITIAL_USEFUL_DATES = [
  {
    name: 'Elecciones PASO',
    date: new Date('2023-08-13')
  },
  {
    name: 'Elecciones Generales',
    date: new Date('2023-10-22')
  }
]

function App() {
  const { weather, loading } = UseWeather()
  const { holidays } = UseHoliday()
  const { dolar } = UseDolar()
  const usefulDates: UtilDate[] = INITIAL_USEFUL_DATES
  const today = new Date()

  return (
    <div className='App'>
      <h1>HOY EN ARGENTINA🧉</h1>

      {loading && <p>Cargando...</p>}

      {weather.length > 0 && (
        <WeatherItem weather={weather[0]} />
      )}
      {holidays.length > 0 &&
        <Holiday today={today} holidays={holidays} />
      }
      <DolarComponent dolar={dolar} />
      <UsefulDates today={today} usefulDates={usefulDates} />
      <Footer />
    </div>
  )
}

export default App
