import { type HolidaysResults } from '../types'

interface Props {
  today: Date
  holidays: HolidaysResults[]
}

export default function Holiday({ today, holidays }: Props) {
  const nextHoliday = holidays.find((holiday) => (new Date(2023, holiday.mes - 1, holiday.dia)) > today ?? { ...holidays[0] })
  const nextHolidayDate = new Date(2023, nextHoliday?.mes as number - 1, nextHoliday?.dia)

  const msDiff = nextHolidayDate.getTime() - today.getTime()
  const dayDiff = Math.round(msDiff / 86400000)

  const rtf = new Intl.RelativeTimeFormat('es-AR', { numeric: 'auto' })

  return (
    <div className={`holiday ${nextHoliday?.id as string}`}>
      <p>El proximo feriado es {rtf.format(dayDiff, 'day')} :</p>
      <p>{nextHoliday?.motivo}</p>
    </div>
  )
}
