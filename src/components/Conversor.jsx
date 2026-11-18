import { useState } from 'react'
import tasas from '../data/tasas.json'
import SelectorMoneda from './SelectorMoneda'
import Resultado from './Resultado'

// TODO: importa SelectorMoneda y, en el paso 5, Resultado

// Componente principal: guarda el estado y hace el cálculo.
function Conversor() {
  // TODO (paso 4): tres estados -> cantidad (100), origen ('EUR'), destino ('USD')
  const [cantidad, setCantidad] = useState(100)
  const [origen, setOrigen] = useState('EUR')
  const [destino, setDestino] = useState('USD')


  // TODO (paso 4): calcula el resultado pasando por el euro:
  //   resultado = cantidad / tasa de origen * tasa de destino

  const resultado = cantidad / tasas[origen].tasa * tasas[destino].tasa

  // TODO (paso 5): función intercambiar() que invierte origen y destino
  function intercambiar(){
    setOrigen(destino)
    setDestino(origen)
  }

  return (
    <div className="conversor">
      {/* TODO: input numérico para la cantidad (recuerda convertir a número) */}
      <input type="number" value={cantidad} onChange={ (e) => setCantidad(Number(e.target.value))}></input>
      {/* TODO: dos SelectorMoneda: "De" (origen) y "A" (destino) */}
      <SelectorMoneda etiqueta="De" valor={origen} onCambiar={setOrigen} />
      <SelectorMoneda etiqueta="A" valor={destino} onCambiar={setDestino} />
      {/* <p>{resultado}</p> */}
      {/* TODO (paso 5): botón Intercambiar */}
      <button onClick={intercambiar}>⇄ Intercambiar</button>
      {/* TODO (paso 5): componente Resultado con sus props */}
      <Resultado cantidad={cantidad} origen={origen} destino={destino} valor={resultado} />
    </div>
  )
}

export default Conversor
