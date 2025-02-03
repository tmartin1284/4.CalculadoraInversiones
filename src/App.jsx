import Header from "./Componentes/Header";



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
      [dato]: +valor
    });
  }


const [datos, setDatos] = useState({datosIniciales});



  return
  
  (
  <>
 
  
  <Header />
    <EntradaDatos />
  if (datos.duracion < 1) 
    console.log("La duración debe ser mayor a 0");
    else {
<SalidaResultados inversionInicial={datos.inversionInicial/>

  } </>
  )
}

export default App;
