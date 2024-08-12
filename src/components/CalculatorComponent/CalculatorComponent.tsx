import styles from "./CalculatorComponent.module.scss";

interface CalculatorComponentProps {}

export const CalculatorComponent = ({}: CalculatorComponentProps) => {
  return (
    <div className={styles.calculatorComponent}>
      <div></div>
    </div>
  );
};
