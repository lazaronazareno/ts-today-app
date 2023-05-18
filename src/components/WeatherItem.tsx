import { type Daily } from '../types'

interface Props {
  weather: Daily
}

export default function WeatherItem({ weather }: Props) {
  const date = new Date(
    new Date(weather.time).getFullYear(),
    new Date(weather.time).getMonth(),
    new Date(weather.time).getDate() + 1
  ).toLocaleString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short'
  })
  return (
    <div className='weather-item'>
      <p>Dia : {date}</p>
      <p>Temperatura Promedio: {weather.values.temperatureAvg}ºC</p>
      <p>Probabilidad de lluvia : {weather.values.precipitationProbabilityAvg}%</p>
      <p>Humedad : {weather.values.humidityAvg}%</p>
      <p>Nublado : {weather.values.cloudCoverAvg}%</p>
    </div>
  )
}
