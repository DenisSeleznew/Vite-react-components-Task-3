import { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [operand1, setOperand1] = useState("");
  const [operator, setOperator] = useState("");
  const [operand2, setOperand2] = useState("");

  const NUMS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const displayValue = `${operand1}${operator}${operand2}` || "0";

  // Обработчик нажатия на цифры
  const handleDigitClick = (digit) => {
    if (operator === "") {
      setOperand1((prev) => prev + digit);
    } else {
      setOperand2((prev) => prev + digit);
    }
  };

  // Обработчик нажатия на кнопку "C" (сброс)
  const handleClear = () => {
    setOperand1("");
    setOperator("");
    setOperand2("");
  };

  // Обработчик нажатия на кнопку "+"
  const handlePlus = () => {
    if (operand1 === "") return;

    if (operator !== "" && operand2 !== "") {
      const result = calculateResult();
      setOperand1(String(result));
      setOperator("+");
      setOperand2("");
    } else {
      setOperator("+");
    }
  };

  // Обработчик нажатия на кнопку "-"
  const handleMinus = () => {
    if (operand1 === "") return;

    if (operator !== "" && operand2 !== "") {
      const result = calculateResult();
      setOperand1(String(result));
      setOperator("-");
      setOperand2("");
    } else {
      setOperator("-");
    }
  };

  const calculateResult = () => {
    const num1 = parseInt(operand1, 10);
    const num2 = parseInt(operand2, 10);

    if (operator === "+") {
      return num1 + num2;
    } else if (operator === "-") {
      return num1 - num2;
    }
    return 0;
  };

  const handleEquals = () => {
    if (operand1 !== "" && operator !== "" && operand2 !== "") {
      const result = calculateResult();
      setOperand1(String(result));
      setOperator("");
      setOperand2("");
    }
  };

  return (
    <div className={styles.calculator}>
      <h1 className={styles.title}>Калькулятор</h1>
      <div className={styles.display}>{displayValue}</div>
      <div className={styles.buttonsGrid}>
        <button
          className={`${styles.btn} ${styles.btnClear}`}
          onClick={handleClear}
        >
          C
        </button>
        <button
          className={`${styles.btn} ${styles.btnOperation}`}
          onClick={handlePlus}
        >
          +
        </button>
        <button
          className={`${styles.btn} ${styles.btnOperation}`}
          onClick={handleMinus}
        >
          -
        </button>
        <button
          className={`${styles.btn} ${styles.btnEquals}`}
          onClick={handleEquals}
        >
          =
        </button>
        {NUMS.map((digit) => (
          <button
            key={digit}
            className={`${styles.btn} ${styles.btnDigit} ${digit === "0" ? styles.btnZero : ""}`}
            onClick={() => handleDigitClick(digit)}
          >
            {digit}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
