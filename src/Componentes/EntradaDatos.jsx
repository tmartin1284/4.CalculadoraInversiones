import PropTypes from "prop-types";
import CuadroDatos from "./CuadroDatos";

export default function EntradaDatos({ datos, setDatos }) {
  return (
    <div className="">
      <CuadroDatos
        texto="Inversión inicial"
        etiqueta="inversionInicial"
        dato={datos.inversionInicial}
        onDatoActualizado={setDatos}
      />
      <CuadroDatos
        texto="Inversión anual"
        etiqueta="inversionAnual"
        dato={datos.inversionAnual}
        onDatoActualizado={setDatos}
      />
      <CuadroDatos
        texto="Interés"
        etiqueta="interes"
        dato={datos.interes}
        onDatoActualizado={setDatos}
      />
      <CuadroDatos
        texto="Duración"
        etiqueta="duracion"
        dato={datos.duracion}
        onDatoActualizado={setDatos}
      />
    </div>
  );
}

EntradaDatos.propTypes = {
  datos: PropTypes.shape({
    inversionInicial: PropTypes.number,
    inversionAnual: PropTypes.number,
    interes: PropTypes.number,
    duracion: PropTypes.number,
  }).isRequired,
  setDatos: PropTypes.func.isRequired,
};
