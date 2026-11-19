# Respuestas

Nombre y apellidos: Hugo Gonzalez

Responde con tus palabras y cita fragmentos de tu propio código.

## 1. ¿Qué relación hay entre index.html, main.jsx y App.jsx?
index.html es la pagina que abre el navegador solo tiene un div con id=root y carga main.jsx.
main.jsx busca ese div y dentro pinta el componente App que es el principal

## 2. ¿Qué es una prop? Ejemplo de tu proyecto (quién la envía y quién la recibe)
Una prop es un dato que un componente padre le pasa a un componente hijo
Ejemplo:
<SelectorMoneda etiqueta="De" valor={origen} onCambiar={setOrigen} />
la envia Conversor que es el padre y la recibe SelectorMoneda que seria el hijo

## 3. ¿Por qué cantidad usa useState y resultado no?
Porque la cantidad la cambia el usuario al escribir asi React lo recuerda y vuelve a dibujar la pantalla cuando cambie
y resultado el usuario no lo cambia directamente

## 4. ¿Qué pasa si quitas Number() en el onChange del input? Pruébalo y explica
El resultado sigue saliendo bien porque lo que llega del input es texto ("100"), pero en la fórmula solo uso dividir / y multiplicar *, y JavaScript convierte el texto en número automáticamente con esas operaciones

## 5. Añade la moneda MXN (peso mexicano, tasa 19.5). ¿Cuántos ficheros has tocado y por qué?
Solo un fichero: tasas.json
Porque ningún componente tiene las monedas escritas a mano: todos las leen del JSON.

## 6. Diferencia entre npm run dev y npm run build. ¿Qué hay dentro de dist/?
Run dev arranca en modo desarrollador y run build arranca en version produccion

En /dev hay /assets dentro un css y un js y luego fuera de assets hay un html
