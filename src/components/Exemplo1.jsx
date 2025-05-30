import { useEffect, useState } from "react";

export function Exemplo1() {
    // useEffect só executado no começo da aplicação ou quando há uma mudança em algum estado
  const [numero, setNumero] = useState(0);

  useEffect(() => {
    alert("O número mudou!");
  }, [numero]);
    return (
  <section>
    <h1>useEffect</h1>

    <div>
      <h2>Número: {numero}</h2>
      <button onClick={() => setNumero(numero + 1)}>
        Aumentar
      </button>
    </div>
  </section>
    )
}