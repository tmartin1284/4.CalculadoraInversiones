import PropTypes from "prop-types";
export default function LineaResultados({ dato }) {
  console.log;
  return (
    <tr>
      {console.log(dato)}
      <td>{dato.year}</td>
      <td>{dato.investmentValue}</td>
      <td>{dato.interest}</td>
      <td>{dato.totalinterest}</td>
      <td>{dato.investmentCapital}</td>
    </tr>
  );
}

LineaResultados.propTypes = {
  dato: PropTypes.shape({
    year: PropTypes.number,
    investmentValue: PropTypes.number,
    interest: PropTypes.number,
    totalinterest: PropTypes.number,
    investmentCapital: PropTypes.number,
  }).isRequired,
};
