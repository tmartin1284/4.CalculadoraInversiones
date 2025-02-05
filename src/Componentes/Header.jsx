import imagen from "../assets/investment-calculator-logo.png";
import "../index.css";

export default function Header() {
  return (
    <header id="header">
      <img src={imagen} alt=" imagen calculadora" />
      <h1>Calculadora de Inversiones con React</h1>
    </header>
  );
}
