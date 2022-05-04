import { useEffect, useState, useRef } from "react";

function App() {
  const [contador, setContador] = useState(0)
  const nombre = useRef('Carlos')
  const renderCount = useRef(0);

  useEffect(() => {
    if( renderCount.current === 0 ) {
      renderCount.current = renderCount.current + 1
      return
    }
    console.log(`counter updated, new value: ${contador}`)
  }, [contador])  

  const handleChangeName = ()=>{
    nombre.current = 'Arturo'
    console.log(`new name ${nombre.current}`)
  }

  return (
    <div>
      <h1>Counter {contador}</h1>
      <button onClick={()=> setContador(contador+1)}>+1</button>

      <hr />
      <h1>Nombre: {nombre.current}</h1>
      <button onClick={handleChangeName}>cambiar nombre</button>
    </div>
  );
}

export default App;
