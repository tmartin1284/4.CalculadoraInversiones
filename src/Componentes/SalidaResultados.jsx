import LineaResultados from "./LineaResultados.jsx";
import PropTypes from "prop-types";
import { calculateInvestmentResults } from "../util/investment.js";

export default function SalidaResultados({ datos }) {
  //console.log(datos);
  const resultados = calculateInvestmentResults({ ...datos });
  // console.log(resultados);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Año</th>
          <th>Total Invertido</th>
          <th>Intereses anuales </th>
          <th>Intereses Totales</th>
          <th>Capital Invertido</th>
        </tr>
      </thead>
      <tbody>
        {resultados.map((resultado) => (
          <LineaResultados key={resultado.year} dato={resultado} />
        ))}
      </tbody>
    </table>
  );
}

SalidaResultados.propTypes = {
  datos: PropTypes.shape({
    inversionInicial: PropTypes.number,
    inversionAnual: PropTypes.number,
    interes: PropTypes.number,
    duracion: PropTypes.number,
  }),
};
