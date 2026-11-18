// TODO: importa los datos de '../data/tasas.json'

// Componente: desplegable para elegir una moneda.
// Props que recibe:
//   etiqueta  -> texto que se muestra encima ("De", "A"...)
//   valor     -> código de la moneda seleccionada ("EUR", "BTC"...)
//   onCambiar -> función que se llama con el nuevo código al cambiar
function SelectorMoneda({ etiqueta, valor, onCambiar }) {
  return (
    <label className="campo">
      {etiqueta}
      {/* TODO: un <select> con value={valor} */}
      {/* TODO: en su onChange, llama a onCambiar con el valor elegido */}
      {/* TODO: recorre las monedas del JSON y genera un <option> por cada una (no olvides la key) */}
    </label>
  )
}

export default SelectorMoneda
