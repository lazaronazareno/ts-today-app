import { useEffect, useState } from 'react'
import './App.css'
import { type HolidaysResults, type Daily, Dolar, type DolarResults } from './types'
import WeatherItem from './components/WeatherItem'
import Holiday from './components/Holiday'
import DolarComponent from './components/Dolar'

const API_KEY: string = import.meta.env.VITE_API_KEY
const INITIAL_STATE = [
  {
    time: '2023-05-17T00:00:00Z',
    values: {
      cloudBaseAvg: 4.76,
      cloudBaseMax: 6.9,
      cloudBaseMin: 0,
      cloudCeilingAvg: 4.95,
      cloudCeilingMax: 7.09,
      cloudCeilingMin: 0,
      cloudCoverAvg: 73.08,
      cloudCoverMax: 100,
      cloudCoverMin: 4.95,
      dewPointAvg: 11.08,
      dewPointMax: 12.2,
      dewPointMin: 9.85,
      evapotranspirationAvg: 0.117,
      evapotranspirationMax: 0.352,
      evapotranspirationMin: 0.027,
      evapotranspirationSum: 2.813,
      freezingRainIntensityAvg: 0,
      freezingRainIntensityMax: 0,
      freezingRainIntensityMin: 0,
      humidityAvg: 49.05,
      humidityMax: 58.31,
      humidityMin: 40.05,
      iceAccumulationAvg: 0,
      iceAccumulationLweAvg: 0,
      iceAccumulationLweMax: 0,
      iceAccumulationLweMin: 0,
      iceAccumulationLweSum: 0,
      iceAccumulationMax: 0,
      iceAccumulationMin: 0,
      iceAccumulationSum: 0,
      moonriseTime: '2023-05-17T08:34:40Z',
      moonsetTime: '2023-05-17T19:52:56Z',
      precipitationProbabilityAvg: 0,
      precipitationProbabilityMax: 0,
      precipitationProbabilityMin: 0,
      pressureSurfaceLevelAvg: 1013.44,
      pressureSurfaceLevelMax: 1014.71,
      pressureSurfaceLevelMin: 1011.62,
      rainAccumulationAvg: 0,
      rainAccumulationLweAvg: 0,
      rainAccumulationLweMax: 0,
      rainAccumulationLweMin: 0,
      rainAccumulationMax: 0,
      rainAccumulationMin: 0,
      rainAccumulationSum: 0,
      rainIntensityAvg: 0,
      rainIntensityMax: 0,
      rainIntensityMin: 0,
      sleetAccumulationAvg: 0,
      sleetAccumulationLweAvg: 0,
      sleetAccumulationLweMax: 0,
      sleetAccumulationLweMin: 0,
      sleetAccumulationLweSum: 0,
      sleetAccumulationMax: 0,
      sleetAccumulationMin: 0,
      sleetIntensityAvg: 0,
      sleetIntensityMax: 0,
      sleetIntensityMin: 0,
      snowAccumulationAvg: 0,
      snowAccumulationLweAvg: 0,
      snowAccumulationLweMax: 0,
      snowAccumulationLweMin: 0,
      snowAccumulationLweSum: 0,
      snowAccumulationMax: 0,
      snowAccumulationMin: 0,
      snowAccumulationSum: 0,
      snowIntensityAvg: 0,
      snowIntensityMax: 0,
      snowIntensityMin: 0,
      sunriseTime: '2023-05-16T10:35:00Z',
      sunsetTime: '2023-05-16T21:04:00Z',
      temperatureApparentAvg: 22.49,
      temperatureApparentMax: 24.37,
      temperatureApparentMin: 20.32,
      temperatureAvg: 22.49,
      temperatureMax: 24.37,
      temperatureMin: 20.32,
      uvHealthConcernAvg: 0,
      uvHealthConcernMax: 1,
      uvHealthConcernMin: 0,
      uvIndexAvg: 1,
      uvIndexMax: 3,
      uvIndexMin: 0,
      visibilityAvg: 16,
      visibilityMax: 16,
      visibilityMin: 16,
      weatherCodeMax: 1000,
      weatherCodeMin: 1000,
      windDirectionAvg: 33.96,
      windGustAvg: 8.05,
      windGustMax: 9.43,
      windGustMin: 7.34,
      windSpeedAvg: 3.25,
      windSpeedMax: 3.73,
      windSpeedMin: 2.61
    }
  },
  {
    time: '2023-05-18T00:00:00Z',
    values: {
      cloudBaseAvg: 1.32,
      cloudBaseMax: 6.84,
      cloudBaseMin: 0,
      cloudCeilingAvg: 1.42,
      cloudCeilingMax: 7.96,
      cloudCeilingMin: 0,
      cloudCoverAvg: 44.42,
      cloudCoverMax: 100,
      cloudCoverMin: 0,
      dewPointAvg: 11.26,
      dewPointMax: 14.58,
      dewPointMin: 7.73,
      evapotranspirationAvg: 0.101,
      evapotranspirationMax: 0.351,
      evapotranspirationMin: 0,
      evapotranspirationSum: 2.421,
      freezingRainIntensityAvg: 0,
      freezingRainIntensityMax: 0,
      freezingRainIntensityMin: 0,
      humidityAvg: 60.43,
      humidityMax: 82.42,
      humidityMin: 37.84,
      iceAccumulationAvg: 0,
      iceAccumulationLweAvg: 0,
      iceAccumulationLweMax: 0,
      iceAccumulationLweMin: 0,
      iceAccumulationLweSum: 0,
      iceAccumulationMax: 0,
      iceAccumulationMin: 0,
      iceAccumulationSum: 0,
      moonriseTime: '2023-05-18T09:40:55Z',
      moonsetTime: '2023-05-18T20:24:55Z',
      precipitationProbabilityAvg: 0.6,
      precipitationProbabilityMax: 10,
      precipitationProbabilityMin: 0,
      pressureSurfaceLevelAvg: 1014.19,
      pressureSurfaceLevelMax: 1016.32,
      pressureSurfaceLevelMin: 1011.42,
      rainAccumulationAvg: 0,
      rainAccumulationLweAvg: 0,
      rainAccumulationLweMax: 0.04,
      rainAccumulationLweMin: 0,
      rainAccumulationMax: 0.04,
      rainAccumulationMin: 0,
      rainAccumulationSum: 0.05,
      rainIntensityAvg: 0,
      rainIntensityMax: 0.04,
      rainIntensityMin: 0,
      sleetAccumulationAvg: 0,
      sleetAccumulationLweAvg: 0,
      sleetAccumulationLweMax: 0,
      sleetAccumulationLweMin: 0,
      sleetAccumulationLweSum: 0,
      sleetAccumulationMax: 0,
      sleetAccumulationMin: 0,
      sleetIntensityAvg: 0,
      sleetIntensityMax: 0,
      sleetIntensityMin: 0,
      snowAccumulationAvg: 0,
      snowAccumulationLweAvg: 0,
      snowAccumulationLweMax: 0,
      snowAccumulationLweMin: 0,
      snowAccumulationLweSum: 0,
      snowAccumulationMax: 0,
      snowAccumulationMin: 0,
      snowAccumulationSum: 0,
      snowIntensityAvg: 0,
      snowIntensityMax: 0,
      snowIntensityMin: 0,
      sunriseTime: '2023-05-17T10:36:00Z',
      sunsetTime: '2023-05-17T21:04:00Z',
      temperatureApparentAvg: 19.47,
      temperatureApparentMax: 23.07,
      temperatureApparentMin: 17.11,
      temperatureAvg: 19.47,
      temperatureMax: 23.07,
      temperatureMin: 17.11,
      uvHealthConcernAvg: 0,
      uvHealthConcernMax: 1,
      uvHealthConcernMin: 0,
      uvIndexAvg: 1,
      uvIndexMax: 3,
      uvIndexMin: 0,
      visibilityAvg: 15.31,
      visibilityMax: 16,
      visibilityMin: 10.54,
      weatherCodeMax: 1000,
      weatherCodeMin: 1000,
      windDirectionAvg: 233.54,
      windGustAvg: 7.21,
      windGustMax: 11.61,
      windGustMin: 2.55,
      windSpeedAvg: 2.9,
      windSpeedMax: 4.14,
      windSpeedMin: 1.17
    }
  },
  {
    time: '2023-05-19T00:00:00Z',
    values: {
      cloudBaseAvg: 2.52,
      cloudBaseMax: 8.02,
      cloudBaseMin: 0,
      cloudCeilingAvg: 3.59,
      cloudCeilingMax: 9.8,
      cloudCeilingMin: 0,
      cloudCoverAvg: 65.76,
      cloudCoverMax: 100,
      cloudCoverMin: 0,
      dewPointAvg: 12.8,
      dewPointMax: 14.45,
      dewPointMin: 8.69,
      evapotranspirationAvg: 0.068,
      evapotranspirationMax: 0.264,
      evapotranspirationMin: 0,
      evapotranspirationSum: 1.629,
      freezingRainIntensityAvg: 0,
      freezingRainIntensityMax: 0,
      freezingRainIntensityMin: 0,
      humidityAvg: 78.4,
      humidityMax: 89.04,
      humidityMin: 51.36,
      iceAccumulationAvg: 0,
      iceAccumulationLweAvg: 0,
      iceAccumulationLweMax: 0,
      iceAccumulationLweMin: 0,
      iceAccumulationLweSum: 0,
      iceAccumulationMax: 0,
      iceAccumulationMin: 0,
      iceAccumulationSum: 0,
      moonriseTime: '2023-05-19T10:46:48Z',
      moonsetTime: '2023-05-19T21:02:10Z',
      precipitationProbabilityAvg: 4.4,
      precipitationProbabilityMax: 25,
      precipitationProbabilityMin: 0,
      pressureSurfaceLevelAvg: 1016.79,
      pressureSurfaceLevelMax: 1018.49,
      pressureSurfaceLevelMin: 1015.74,
      rainAccumulationAvg: 0.17,
      rainAccumulationLweAvg: 0.17,
      rainAccumulationLweMax: 1.33,
      rainAccumulationLweMin: 0,
      rainAccumulationMax: 1.33,
      rainAccumulationMin: 0,
      rainAccumulationSum: 4.04,
      rainIntensityAvg: 0.17,
      rainIntensityMax: 1.33,
      rainIntensityMin: 0,
      sleetAccumulationAvg: 0,
      sleetAccumulationLweAvg: 0,
      sleetAccumulationLweMax: 0,
      sleetAccumulationLweMin: 0,
      sleetAccumulationLweSum: 0,
      sleetAccumulationMax: 0,
      sleetAccumulationMin: 0,
      sleetIntensityAvg: 0,
      sleetIntensityMax: 0,
      sleetIntensityMin: 0,
      snowAccumulationAvg: 0,
      snowAccumulationLweAvg: 0,
      snowAccumulationLweMax: 0,
      snowAccumulationLweMin: 0,
      snowAccumulationLweSum: 0,
      snowAccumulationMax: 0,
      snowAccumulationMin: 0,
      snowAccumulationSum: 0,
      snowIntensityAvg: 0,
      snowIntensityMax: 0,
      snowIntensityMin: 0,
      sunriseTime: '2023-05-18T10:36:00Z',
      sunsetTime: '2023-05-18T21:03:00Z',
      temperatureApparentAvg: 16.72,
      temperatureApparentMax: 19.92,
      temperatureApparentMin: 13.61,
      temperatureAvg: 16.72,
      temperatureMax: 19.92,
      temperatureMin: 13.61,
      uvHealthConcernAvg: 0,
      uvHealthConcernMax: 1,
      uvHealthConcernMin: 0,
      uvIndexAvg: 0,
      uvIndexMax: 3,
      uvIndexMin: 0,
      visibilityAvg: 14.87,
      visibilityMax: 16,
      visibilityMin: 3.56,
      weatherCodeMax: 1001,
      weatherCodeMin: 1001,
      windDirectionAvg: 105.57,
      windGustAvg: 4.25,
      windGustMax: 9.77,
      windGustMin: 1.85,
      windSpeedAvg: 2.75,
      windSpeedMax: 6.2,
      windSpeedMin: 1.05
    }
  },
  {
    time: '2023-05-20T00:00:00Z',
    values: {
      cloudBaseAvg: 2.5,
      cloudBaseMax: 7.79,
      cloudBaseMin: 0,
      cloudCeilingAvg: 5.04,
      cloudCeilingMax: 10.94,
      cloudCeilingMin: 0,
      cloudCoverAvg: 82.16,
      cloudCoverMax: 100,
      cloudCoverMin: 8.59,
      dewPointAvg: 9.87,
      dewPointMax: 12.14,
      dewPointMin: 8.79,
      evapotranspirationAvg: 0.085,
      evapotranspirationMax: 0.216,
      evapotranspirationMin: 0.029,
      evapotranspirationSum: 2.032,
      freezingRainIntensityAvg: 0,
      freezingRainIntensityMax: 0,
      freezingRainIntensityMin: 0,
      humidityAvg: 78.81,
      humidityMax: 87.93,
      humidityMin: 66.28,
      iceAccumulationAvg: 0,
      iceAccumulationLweAvg: 0,
      iceAccumulationLweMax: 0,
      iceAccumulationLweMin: 0,
      iceAccumulationLweSum: 0,
      iceAccumulationMax: 0,
      iceAccumulationMin: 0,
      iceAccumulationSum: 0,
      moonriseTime: '2023-05-20T11:51:11Z',
      moonsetTime: '2023-05-20T21:42:51Z',
      precipitationProbabilityAvg: 0,
      precipitationProbabilityMax: 0,
      precipitationProbabilityMin: 0,
      pressureSurfaceLevelAvg: 1019.63,
      pressureSurfaceLevelMax: 1021.27,
      pressureSurfaceLevelMin: 1018.63,
      rainAccumulationAvg: 0,
      rainAccumulationLweAvg: 0,
      rainAccumulationLweMax: 0,
      rainAccumulationLweMin: 0,
      rainAccumulationMax: 0,
      rainAccumulationMin: 0,
      rainAccumulationSum: 0,
      rainIntensityAvg: 0,
      rainIntensityMax: 0,
      rainIntensityMin: 0,
      sleetAccumulationAvg: 0,
      sleetAccumulationLweAvg: 0,
      sleetAccumulationLweMax: 0,
      sleetAccumulationLweMin: 0,
      sleetAccumulationLweSum: 0,
      sleetAccumulationMax: 0,
      sleetAccumulationMin: 0,
      sleetIntensityAvg: 0,
      sleetIntensityMax: 0,
      sleetIntensityMin: 0,
      snowAccumulationAvg: 0,
      snowAccumulationLweAvg: 0,
      snowAccumulationLweMax: 0,
      snowAccumulationLweMin: 0,
      snowAccumulationLweSum: 0,
      snowAccumulationMax: 0,
      snowAccumulationMin: 0,
      snowAccumulationSum: 0,
      snowIntensityAvg: 0,
      snowIntensityMax: 0,
      snowIntensityMin: 0,
      sunriseTime: '2023-05-19T10:37:00Z',
      sunsetTime: '2023-05-19T21:03:00Z',
      temperatureApparentAvg: 13.55,
      temperatureApparentMax: 16.05,
      temperatureApparentMin: 11.19,
      temperatureAvg: 13.55,
      temperatureMax: 16.05,
      temperatureMin: 11.19,
      uvHealthConcernAvg: 0,
      uvHealthConcernMax: 1,
      uvHealthConcernMin: 0,
      uvIndexAvg: 0,
      uvIndexMax: 3,
      uvIndexMin: 0,
      visibilityAvg: 17.55,
      visibilityMax: 22.78,
      visibilityMin: 16,
      weatherCodeMax: 1001,
      weatherCodeMin: 1001,
      windDirectionAvg: 140.84,
      windGustAvg: 9.26,
      windGustMax: 11.56,
      windGustMin: 4.3,
      windSpeedAvg: 6.07,
      windSpeedMax: 7.45,
      windSpeedMin: 2.92
    }
  },
  {
    time: '2023-05-21T00:00:00Z',
    values: {
      cloudBaseAvg: 0.75,
      cloudBaseMax: 3.44,
      cloudBaseMin: 0,
      cloudCeilingAvg: 1.27,
      cloudCeilingMax: 4.62,
      cloudCeilingMin: 0,
      cloudCoverAvg: 91.7,
      cloudCoverMax: 100,
      cloudCoverMin: 46.74,
      dewPointAvg: 12.22,
      dewPointMax: 15.36,
      dewPointMin: 9.21,
      evapotranspirationAvg: 0.041,
      evapotranspirationMax: 0.102,
      evapotranspirationMin: 0,
      evapotranspirationSum: 0.978,
      freezingRainIntensityAvg: 0,
      freezingRainIntensityMax: 0,
      freezingRainIntensityMin: 0,
      humidityAvg: 86.04,
      humidityMax: 94.55,
      humidityMin: 74.83,
      iceAccumulationAvg: 0,
      iceAccumulationLweAvg: 0,
      iceAccumulationLweMax: 0,
      iceAccumulationLweMin: 0,
      iceAccumulationLweSum: 0,
      iceAccumulationMax: 0,
      iceAccumulationMin: 0,
      iceAccumulationSum: 0,
      moonriseTime: '2023-05-21T12:52:14Z',
      moonsetTime: '2023-05-21T22:29:30Z',
      precipitationProbabilityAvg: 8.5,
      precipitationProbabilityMax: 25,
      precipitationProbabilityMin: 0,
      pressureSurfaceLevelAvg: 1014.48,
      pressureSurfaceLevelMax: 1018.6,
      pressureSurfaceLevelMin: 1010.64,
      rainAccumulationAvg: 0.06,
      rainAccumulationLweAvg: 0.06,
      rainAccumulationLweMax: 0.32,
      rainAccumulationLweMin: 0,
      rainAccumulationMax: 0.32,
      rainAccumulationMin: 0,
      rainAccumulationSum: 1.38,
      rainIntensityAvg: 0.06,
      rainIntensityMax: 0.32,
      rainIntensityMin: 0,
      sleetAccumulationAvg: 0,
      sleetAccumulationLweAvg: 0,
      sleetAccumulationLweMax: 0,
      sleetAccumulationLweMin: 0,
      sleetAccumulationLweSum: 0,
      sleetAccumulationMax: 0,
      sleetAccumulationMin: 0,
      sleetIntensityAvg: 0,
      sleetIntensityMax: 0,
      sleetIntensityMin: 0,
      snowAccumulationAvg: 0,
      snowAccumulationLweAvg: 0,
      snowAccumulationLweMax: 0,
      snowAccumulationLweMin: 0,
      snowAccumulationLweSum: 0,
      snowAccumulationMax: 0,
      snowAccumulationMin: 0,
      snowAccumulationSum: 0,
      snowIntensityAvg: 0,
      snowIntensityMax: 0,
      snowIntensityMin: 0,
      sunriseTime: '2023-05-20T10:37:00Z',
      sunsetTime: '2023-05-20T21:03:00Z',
      temperatureApparentAvg: 14.57,
      temperatureApparentMax: 16.94,
      temperatureApparentMin: 13.4,
      temperatureAvg: 14.57,
      temperatureMax: 16.94,
      temperatureMin: 13.4,
      uvHealthConcernAvg: 0,
      uvHealthConcernMax: 0,
      uvHealthConcernMin: 0,
      uvIndexAvg: 0,
      uvIndexMax: 1,
      uvIndexMin: 0,
      visibilityAvg: 23.69,
      visibilityMax: 24.14,
      visibilityMin: 21.2,
      weatherCodeMax: 1001,
      weatherCodeMin: 1001,
      windDirectionAvg: 63.42,
      windGustAvg: 9.67,
      windGustMax: 11.1,
      windGustMin: 7.1,
      windSpeedAvg: 5.08,
      windSpeedMax: 7.13,
      windSpeedMin: 3.03
    }
  }
]

const INITIAL_HOLIDAY = [
  {
    motivo: 'Año Nuevo',
    tipo: 'inamovible',
    info: 'https://es.wikipedia.org/wiki/A%C3%B1o_Nuevo',
    dia: 1,
    mes: 1,
    id: 'año-nuevo'
  },
  {
    motivo: 'Carnaval',
    tipo: 'inamovible',
    info: 'https://es.wikipedia.org/wiki/Carnaval',
    dia: 20,
    mes: 2,
    id: 'carnaval'
  },
  {
    motivo: 'Carnaval',
    tipo: 'inamovible',
    info: 'https://es.wikipedia.org/wiki/Carnaval',
    dia: 21,
    mes: 2,
    id: 'carnaval'
  },
  {
    motivo: 'Día Nacional de la Memoria por la Verdad y la Justicia',
    tipo: 'inamovible',
    info: 'https://es.wikipedia.org/wiki/D%C3%ADa_Nacional_de_la_Memoria_por_la_Verdad_y_la_Justicia',
    dia: 24,
    mes: 3,
    id: 'memoria-verdad-justicia'
  },
  {
    motivo: 'Día del Veterano y de los Caídos en la Guerra de Malvinas',
    tipo: 'inamovible',
    info: 'https://es.wikipedia.org/wiki/D%C3%ADa_del_Veterano_y_de_los_Ca%C3%ADdos_en_la_Guerra_de_Malvinas',
    dia: 2,
    mes: 4,
    id: 'veteranos-malvinas'
  },
  {
    motivo: 'Viernes Santo Festividad Cristiana',
    tipo: 'inamovible',
    info: 'https://es.wikipedia.org/wiki/Viernes_Santo',
    dia: 7,
    mes: 4,
    id: 'viernes-santo'
  },
  {
    motivo: 'Día del Trabajador',
    tipo: 'inamovible',
    info: 'https://es.wikipedia.org/wiki/D%C3%ADa_Internacional_de_los_Trabajadores',
    dia: 1,
    mes: 5,
    id: 'trabajador'
  },
  {
    motivo: 'Día de la Revolución de Mayo',
    tipo: 'inamovible',
    info: 'https://es.wikipedia.org/wiki/Revoluci%C3%B3n_de_Mayo',
    dia: 25,
    mes: 5,
    id: 'revolucion-mayo'
  },
  {
    motivo: 'Feriado Puente Turístico',
    tipo: 'puente',
    info: 'https://es.wikipedia.org/wiki/Puente_festivo',
    dia: 26,
    mes: 5,
    id: 'puente-turistico'
  },
  {
    motivo: 'Paso a la Inmortalidad del Gral. Don Martín Güemes',
    tipo: 'trasladable',
    original: '17-06',
    info: 'https://es.wikipedia.org/wiki/Mart%C3%ADn_Miguel_de_G%C3%BCemes',
    dia: 17,
    mes: 6,
    id: 'martin-guemes'
  },
  {
    motivo: 'Feriado Puente Turístico',
    tipo: 'puente',
    info: 'https://es.wikipedia.org/wiki/Puente_festivo',
    dia: 19,
    mes: 6,
    id: 'puente-turistico'
  },
  {
    motivo: 'Paso a la Inmortalidad del General Manuel Belgrano',
    tipo: 'inamovible',
    info: 'https://es.wikipedia.org/wiki/D%C3%ADa_de_la_Bandera_(Argentina)',
    dia: 20,
    mes: 6,
    id: 'belgrano'
  },
  {
    motivo: 'Día de la Independencia',
    tipo: 'inamovible',
    info: 'https://es.wikipedia.org/wiki/Declaraci%C3%B3n_de_independencia_de_la_Argentina',
    dia: 9,
    mes: 7,
    id: 'independencia'
  },
  {
    motivo: 'Paso a la Inmortalidad del General José de San Martín',
    tipo: 'trasladable',
    original: '17-08',
    info: 'https://es.wikipedia.org/wiki/Jos%C3%A9_de_San_Mart%C3%ADn',
    dia: 21,
    mes: 8,
    id: 'san-martin'
  },
  {
    motivo: 'Feriado Puente Turístico',
    tipo: 'puente',
    info: 'https://es.wikipedia.org/wiki/Puente_festivo',
    dia: 13,
    mes: 10,
    id: 'puente-turistico'
  },
  {
    motivo: 'Día del Respeto a la Diversidad Cultural',
    tipo: 'trasladable',
    original: '12-10',
    info: 'https://es.wikipedia.org/wiki/D%C3%ADa_del_Respeto_a_la_Diversidad_Cultural_(Argentina)',
    dia: 16,
    mes: 10,
    id: 'diversidad'
  },
  {
    motivo: 'Día de la Soberanía Nacional',
    tipo: 'trasladable',
    original: '20-11',
    info: 'https://es.wikipedia.org/wiki/D%C3%ADa_de_la_Soberan%C3%ADa_Nacional',
    dia: 20,
    mes: 11,
    id: 'soberania-nacional'
  },
  {
    motivo: 'Inmaculada Concepción de María',
    tipo: 'inamovible',
    info: 'https://es.wikipedia.org/wiki/Inmaculada_Concepci%C3%B3n',
    dia: 8,
    mes: 12,
    id: 'inmaculada-maria'
  },
  {
    motivo: 'Navidad',
    tipo: 'inamovible',
    info: 'https://es.wikipedia.org/wiki/Navidad',
    dia: 25,
    mes: 12,
    id: 'navidad'
  }
]

const INITIAL_DOLAR = [
  {
    casa: {
      nombre: 'Oficial',
      compra: '233,910',
      venta: '242,910',
      agencia: '344',
      observaciones: {},
      geolocalizacion: {
        latitud: {},
        longitud: {}
      },
      telefono: '0810-666-4444',
      direccion: {},
      decimales: '3'
    }
  },
  {
    casa: {
      nombre: 'Blue',
      compra: '482,000',
      venta: '487,000',
      agencia: '380',
      observaciones: {},
      geolocalizacion: {
        latitud: {},
        longitud: {}
      },
      telefono: {},
      direccion: {},
      decimales: '3'
    }
  },
  {
    casa: {
      nombre: 'Mayorista Bancos',
      compra: '231,950',
      venta: '232,350',
      agencia: '44',
      geolocalizacion: {
        latitud: '-34.6033922',
        longitud: '-58.439710'
      },
      telefono: '4556-8995',
      direccion: 'Uruguay 4532',
      observaciones: {},
      decimales: '3'
    }
  },
  {
    casa: {
      nombre: 'BCRA de Referencia',
      compra: '231,308',
      venta: '243,041',
      agencia: '49',
      observaciones: {},
      decimales: '3'
    }
  },
  {
    casa: {
      nombre: 'Banco Nación Billete',
      compra: '231,500',
      venta: '241,500',
      agencia: '47',
      observaciones: {},
      decimales: '3'
    }
  },
  {
    casa: {
      nombre: 'Banco Nación Público',
      compra: '231,500',
      venta: '241,500',
      agencia: '210',
      observaciones: {},
      decimales: '3'
    }
  }
]

function App() {
  const [weather, setWeather] = useState<Daily[]>(INITIAL_STATE)
  const [holidays, setHolidays] = useState<HolidaysResults[]>(INITIAL_HOLIDAY)
  const [dolar, setDolar] = useState<DolarResults[]>(INITIAL_DOLAR)
  const [loading, setLoading] = useState(false)

  /*   useEffect(() => {
    setLoading(true)
    fetch(`https://api.tomorrow.io/v4/weather/forecast?location=buenosaires&timesteps=daily&apikey=${API_KEY}`)
      .then(async (res) => await res.json())
      .then((data) => {
        setWeather(data.timelines.daily)
        setLoading(false)
      }).catch((err) => {
        console.log(err)
      })
  }, []) */

  /*   useEffect(() => {
    fetch('https://nolaborables.com.ar/api/v2/feriados/2023')
      .then(async (res) => await res.json())
      .then((data) => {
        setHolidays(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, []) */

  /* useEffect(() => {
    fetch('https://www.dolarsi.com/api/api.php?type=dolar')
      .then(async (res) => await res.json())
      .then((data) => {
        setDolar(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, []) */

  const today = new Date(new Date(weather[0].time).getFullYear(), new Date(weather[0].time).getMonth(), new Date(weather[0].time).getDate() + 1)

  const nextDays = weather.slice(1)
  return (
    <div className='App'>
      <h1>HOY EN ARGENTINA🧉</h1>
      {
        loading && <p>Loading...</p>
      }

      {weather.length > 0 && (
        <WeatherItem weather={weather[0]} />
      )}
      <div>

        {/* {nextDays.map((weather) => (
          <WeatherItem key={weather.time} weather={weather} />
        ))} */}

        {/* {holidays.map((holiday) => (
          <div key={`${holiday.id} + ${holiday.dia} + ${holiday.motivo}`}>
            <p>{holiday.motivo}</p>
            <p>{holiday.dia}/{holiday.mes}</p>
          </div>
        ))} */}

        <Holiday today={today} holidays={holidays} />
        <DolarComponent dolar={dolar} />
      </div>
    </div>
  )
}

export default App
