import Header from "./Componentes/Header";
import EntradaDatos from "./Componentes/EntradaDatos";
import { useState } from "react";

function App() {
  const datosIniciales = {
    inversionInicial: 10000,
    inversionAnual: 300,
    interes: 5.5,
    duracion: 10,
  };

  const actualizarDatos = (dato, valor) => {
    setDatos({
      ...datos,
      [dato]: +valor,
    });
  };

  const [datos, setDatos] = useState({ datosIniciales });

  return (
    <>
      <Header />
      <EntradaDatos />
    </>
  );
}

export default App;
