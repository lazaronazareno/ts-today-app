import { type SubteElement } from '../types'
import { LineaAIcon, LineaBIcon, LineaCIcon, LineaDIcon, LineaEIcon, LineaHIcon, LineaPIcon, LineaUIcon } from './SubteIcons'

interface Props {
  subtes: SubteElement[]
}

const getIcon = (name: string) => {
  if (name === 'Línea A') {
    return <LineaAIcon />
  }
  if (name === 'Línea B') {
    return <LineaBIcon />
  }
  if (name === 'Línea C') {
    return <LineaCIcon />
  }
  if (name === 'Línea D') {
    return <LineaDIcon />
  }
  if (name === 'Línea E') {
    return <LineaEIcon />
  }
  if (name === 'Línea H') {
    return <LineaHIcon />
  }
  if (name === 'Línea P') {
    return <LineaPIcon />
  }
  if (name === 'Línea U') {
    return <LineaUIcon />
  }
  return null
}

const SubteItem = ({ subte }: { subte: SubteElement }) => {
  const icon = getIcon(subte.nombre)
  return (
    <div className="subte-item">
      <div className={`subte ${subte.nombre}`}>{icon}</div>
      <p>{subte.estado}</p>
    </div>
  )
}

export default function Subtes({ subtes }: Props) {
  return (
    <a title='Informacion Subtes' href="https://buenosaires.gob.ar/subte" target="_blank" rel="noopener noreferrer" className="subtes">
      {
        subtes.map(subte => (
          <SubteItem key={subte.nombre} subte={subte} />
        ))
      }
    </a>
  )
}
