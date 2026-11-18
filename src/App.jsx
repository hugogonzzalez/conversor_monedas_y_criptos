import SelectorMoneda from './components/SelectorMoneda'
import './App.css'

function App() {
  return (
    <main>
      <h1>Conversor de monedas y cripto</h1>
      <SelectorMoneda etiqueta="Moneda" valor="EUR" onCambiar={() => {}} />
      {/* TODO (paso 4): sustitúyelo por <Conversor /> */}
    </main>
  )
}

export default App
