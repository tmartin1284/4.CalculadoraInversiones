import PropTypes from "prop-types";
import CuadroDatos from "./CuadroDatos";

export default function EntradaDatos({ datos, onCambioDatos }) {
  //console.log(datos);
  return (
    <section id="user-input">
      <div className="input-group">
        <CuadroDatos
          texto="Inversión inicial"
          etiqueta="inversionInicial"
          dato={datos.inversionInicial}
          onDatoActualizado={onCambioDatos}
        />
        <CuadroDatos
          texto="Inversión anual"
          etiqueta="inversionAnual"
          dato={datos.inversionAnual}
          onDatoActualizado={onCambioDatos}
        />
      </div>
      <div className="input-group">
        <CuadroDatos
          texto="Interés"
          etiqueta="interes"
          dato={datos.interes}
          onDatoActualizado={onCambioDatos}
        />
        <CuadroDatos
          texto="Duración"
          etiqueta="duracion"
          dato={datos.duracion}
          onDatoActualizado={onCambioDatos}
        />
      </div>
    </section>
  );
}

EntradaDatos.propTypes = {
  datos: PropTypes.shape({
    inversionInicial: PropTypes.number,
    inversionAnual: PropTypes.number,
    interes: PropTypes.number,
    duracion: PropTypes.number,
  }).isRequired,
  onCambioDatos: PropTypes.func.isRequired,
};
