import { useEffect, useState } from 'react'
import { type Daily } from '../types'
import WeatherIcon from './WeatherIcon'

interface Props {
  weather: Daily
}

export default function WeatherItem({ weather }: Props) {
  const [icon, setIcon] = useState<string>('sunny')

  const date = new Date(
    new Date(weather.time).getFullYear(),
    new Date(weather.time).getMonth(),
    new Date(weather.time).getDate() + 1
  ).toLocaleString('es-ES', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  })

  useEffect(() => {
    if (weather.values.cloudCoverAvg > 70 && weather.values.precipitationProbabilityAvg < 50) {
      setIcon('cloudy')
    }
    if (weather.values.precipitationProbabilityAvg > 50) {
      setIcon('rainy')
    }
  }, [])

  return (
    <div className='weather-item'>
      <p className='today'>{date}</p>
      <div className='temperature'>
        <p>{weather.values.temperatureAvg.toFixed(0)}ºC</p>
        <WeatherIcon icon={icon} />
      </div>
      <div className='weather-item__footer'>
        <div className='rain'>
          <WeatherIcon icon='rainy' />
          <p>{weather.values.precipitationProbabilityAvg}%</p>
        </div>
        {/* <p>Humedad : {weather.values.humidityAvg}%</p> */}
        <div className='cloud'>
          <WeatherIcon icon='cloudy' />
          <p>{weather.values.cloudCoverAvg}%</p>
        </div>
      </div>
    </div>
  )
}
