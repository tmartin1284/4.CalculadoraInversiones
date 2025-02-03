import PropTypes from "prop-types";
export default function CuadroDatos({
  texto,
  etiqueta,
  dato,
  onDatoActualizado,
}) {
  return (
    <div>
      <label htmlFor={etiqueta}>{texto}</label>
      <input
        type="number"
        required
        id={etiqueta}
        name={dato}
        onChange={(e) => onDatoActualizado(etiqueta, +e.target.value)}
      />
    </div>
  );
}

CuadroDatos.propTypes = {
  texto: PropTypes.string.isRequired,
  etiqueta: PropTypes.string.isRequired,
  dato: PropTypes.number.isRequired,
  onDatoActualizado: PropTypes.func.isRequired,
};
