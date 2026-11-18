// TODO: importa useState desde 'react'
// TODO: importa los datos de '../data/tasas.json'
// TODO: importa SelectorMoneda y, en el paso 5, Resultado

// Componente principal: guarda el estado y hace el cálculo.
function Conversor() {
  // TODO (paso 4): tres estados -> cantidad (100), origen ('EUR'), destino ('USD')

  // TODO (paso 4): calcula el resultado pasando por el euro:
  //   resultado = cantidad / tasa de origen * tasa de destino

  // TODO (paso 5): función intercambiar() que invierte origen y destino

  return (
    <div className="conversor">
      {/* TODO: input numérico para la cantidad (recuerda convertir a número) */}
      {/* TODO: dos SelectorMoneda: "De" (origen) y "A" (destino) */}
      {/* TODO (paso 5): botón Intercambiar */}
      {/* TODO (paso 5): componente Resultado con sus props */}
    </div>
  )
}

export default Conversor
