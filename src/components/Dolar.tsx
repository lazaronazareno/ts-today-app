import { type DolarResults } from '../types'

interface Props {
  dolar: DolarResults[]
}

export default function DolarComponent({ dolar }: Props) {
  const filteredDolar = dolar.filter(d => d.casa.nombre === 'Oficial' || d.casa.nombre === 'Blue').map(d => d.casa)
  console.log(filteredDolar)

  return (
    <div className="dolar">
      <h3>💸 Valor Dolar al día 💸</h3>
      <div>
        {filteredDolar.map(d => (
          <div className='dolar-item' key={d.nombre}>
            <p>{d.nombre}</p>
            <p>compra: ${Number(d.compra.replace(/,/g, '.')).toFixed(0)}</p>
            <p>venta: ${Number(d.venta.replace(/,/g, '.')).toFixed(0)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
