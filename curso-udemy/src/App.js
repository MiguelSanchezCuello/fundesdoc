import React, { useState, useEffect } from "react";
import Boton from "./components/Boton/index";
import Result from "./components/Result/Congratulations";

function App() {
  const [count, setCount] = useState(0);
  const [result, setResult] = useState(false);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  const [valor, setValor] = useState(0);
  const handleClick = () => {
    setValor(valor + 1);
    if (valor > 5) {
      setResult(true);
    }
  };
  return (
    <div>
      {/* <p>You clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button> */}
      <h1>Varias formas de usar useStte</h1>
      <h2>{valor}</h2>
      <Boton setValor={setValor} valor={valor} />
      <button onClick={handleClick}>HOla +1</button>
      {result && <Result />}
    </div>
  );
}

export default App;
