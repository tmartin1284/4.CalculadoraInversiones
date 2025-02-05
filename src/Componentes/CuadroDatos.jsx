import PropTypes from "prop-types";
export default function CuadroDatos({
  texto,
  etiqueta,
  dato,
  onDatoActualizado,
}) {
  return (
    <p>
      <label htmlFor={etiqueta}>{texto}</label>
      <input
        type="number"
        required
        id={etiqueta}
        value={dato}
        onChange={(e) => onDatoActualizado(etiqueta, +e.target.value)}
      />
    </p>
  );
}

CuadroDatos.propTypes = {
  texto: PropTypes.string.isRequired,
  etiqueta: PropTypes.string.isRequired,
  dato: PropTypes.number.isRequired,
  onDatoActualizado: PropTypes.func.isRequired,
};
