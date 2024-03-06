import { type Dolar } from '../types'

interface Props {
  dolar: Dolar[]
  error: boolean | null
}

export default function DolarComponent({ dolar, error }: Props) {
  if (error as boolean) {
    return (
      <div className='dolar'>
        <p>Error al obtener datos del Dolar.</p>
      </div>
    )
  }
  const filteredDolar = dolar.filter(d => d.casa === 'oficial' || d.casa === 'blue')

  return (
    <div className="dolar">
      <h3>💸 Valor Dolar al día 💸</h3>
      <div>
        {filteredDolar.map(d => (
          <div className='dolar-item' key={d.nombre}>
            <p>{d.nombre}</p>
            <p>compra: ${d.compra}</p>
            <p>venta: ${d.venta}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
