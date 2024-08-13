import { useState } from "react";
import styles from "./CalculatorComponent.module.scss";
import { ReactComponent as CalculatorIcon } from "../../assets/images/ph_calculator-fill.svg";

interface CalculatorComponentProps {}

type MortgageType = "Repayment" | "Interest Only" | null;

export const CalculatorComponent = ({}: CalculatorComponentProps) => {
  const [selectedRadioValue, setSelectedRadioValue] =
    useState<MortgageType>(null);

  const handleRadioChange = (value: MortgageType) => {
    setSelectedRadioValue(value);
  };

  return (
    <div className={styles.calculatorComponent}>
      {/* formSideContainer */}
      <form className={styles.formSideContainer}>
        {/* Header */}
        <div className={styles.formSideHeader}>
          <p className={styles.formSideHeaderTitle}>Mortgage Calculator</p>
          <button className={styles.formSideHeaderButton}>Clear All</button>
        </div>
        {/* <-----> */}
        {/* Mortgage Amount */}
        <div className={styles.mortgageAmountContainer}>
          <label className={styles.inputTitle}>Mortgage Amount</label>
          <div className={styles.inputContainer}>
            <div className={styles.currencyContainer}>
              <p className={styles.currency}>£</p>
            </div>
            <input className={styles.input} type="number" />
          </div>
        </div>
        {/* <-----> */}
        {/* Mortgage Term and Interest Rate */}
        <div className={styles.mortgageTermAndInterestRateContainer}>
          {/* Mortgage Term */}
          <div>
            <label className={styles.inputTitle}>Mortgage Term</label>
            <div className={styles.inputContainers}>
              <input className={styles.input} type="number" />
              <div className={styles.inputLabelContainer}>
                <label className={styles.inputLabel}>years</label>
              </div>
            </div>
          </div>
          {/* <-----> */}

          {/* Interest Rate */}
          <div>
            <label className={styles.inputTitle}>Interest Rate</label>
            <div className={styles.inputContainers}>
              <input className={styles.input} type="number" />
              <div className={styles.inputLabelContainer}>
                <label className={styles.inputLabel}>%</label>
              </div>
            </div>
          </div>
          {/* <-----> */}
        </div>
        {/* <-----> */}

        {/* Mortgage Type */}
        <div className={styles.mortgageTypeContainer}>
          <label className={styles.inputTitle}>Mortgage Type</label>
          {/* General Container */}
          <div className={styles.radiosContainer}>
            {/* Repayment */}
            <div
              className={`${styles.radioContainer} ${
                selectedRadioValue === "Repayment" &&
                styles.selectedRadioContainer
              }`}
              onClick={() => handleRadioChange("Repayment")}
            >
              <input
                className={styles.radio}
                type="radio"
                name="mortgageType"
                checked={"Repayment" === selectedRadioValue}
              />
              <label className={styles.inputRadioTitle}>Repayment</label>
            </div>
            {/* <-----> */}

            {/* Interest Only */}
            <div
              className={`${styles.radioContainer} ${
                selectedRadioValue === "Interest Only" &&
                styles.selectedRadioContainer
              }`}
              onClick={() => handleRadioChange("Interest Only")}
            >
              <input
                className={styles.radio}
                type="radio"
                name="mortgageType"
                checked={"Interest Only" === selectedRadioValue}
              />
              <label className={styles.inputRadioTitle}>Interest Only</label>
            </div>
            {/* <-----> */}
          </div>
          {/* <-----> */}
        </div>

        <button className={styles.calculateButton}>
          <div>
            {" "}
            <CalculatorIcon />
          </div>
          <p className={styles.calculateButtonText}>Calculate Repayments</p>
        </button>
      </form>
      {/* <-----> */}
      {/* resultSideContainer */}
      <div className={styles.resultSideContainer}>
        <p className={styles.resultSideTitle}>Your results</p>
        <p className={styles.resultSideDescription}>
          Your results are shown below based on the information you provided. To
          adjust the results, edit the form and click “calculate repayments”
          again.
        </p>
        {/* resultSideResultsContainer */}
        <div className={styles.resultSideResultsContainer}>
          <p className={styles.repaymentsText}>Your monthly repayments</p>
          <p className={styles.repaymentsInfo}>£1,797.74</p>
          <span className={styles.divider}></span>
          <p className={styles.repaymentsText}>
            Total you'll repay over the term
          </p>
          <p className={styles.totalRepaymentsInfo}>£539,322.94</p>
        </div>
        {/* <-----> */}
      </div>
      {/* <-----> */}
    </div>
  );
};
