import Header from "./Componentes/Header";
import EntradaDatos from "./Componentes/EntradaDatos";
import { useState } from "react";
import SalidaResultados from "./Componentes/SalidaResultados";

function App() {
  const datosIniciales = {
    inversionInicial: 10000,
    inversionAnual: 300,
    interes: 5.5,
    duracion: 10,
  };
  const [datos, setDatos] = useState(datosIniciales);

  const actualizarDatos = (dato, valor) => {
    setDatos({
      ...datos,
      [dato]: +valor,
    });
  };

  return (
    <>
      <Header />
      <EntradaDatos datos={datos} onCambioDatos={actualizarDatos} />

      {datos.duracion > 0 && <SalidaResultados datos={datos} />}
    </>
  );
}

export default App;
