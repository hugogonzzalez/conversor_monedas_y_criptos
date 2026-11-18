// TODO: importa los datos de '../data/tasas.json'

// TODO: constante con los códigos de las criptomonedas

// Componente: muestra el resultado formateado.
// Props que recibe: cantidad, origen, destino, valor
// Debe mostrar algo como:  100 € = 108.00 $
// Decimales: 8 si el destino es una cripto, 2 en el resto.
function Resultado({ cantidad, origen, destino, valor }) {
  // TODO: decide cuántos decimales usar

  return (
    <p className="resultado">
      {/* TODO: cantidad + símbolo de origen = valor formateado + símbolo de destino */}
    </p>
  )
}

export default Resultado
