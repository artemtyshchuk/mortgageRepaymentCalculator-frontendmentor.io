import { useState } from "react";
import styles from "./CalculatorComponent.module.scss";
import { ReactComponent as CalculatorIcon } from "../../assets/images/ph_calculator-fill.svg";
import { useForm, SubmitHandler } from "react-hook-form";
import { formData } from "types/types";
import { ResultsComponent } from "components/ResultsComponent";
import { PreResultsComponent } from "components/PreResultsComponent";

interface CalculatorComponentProps {}

export const CalculatorComponent = ({}: CalculatorComponentProps) => {
  const [monthlyRepayment, setMonthlyRepayment] = useState<number>(0);
  const [totalRepayments, setTotalRepayments] = useState<number>(0);

  const { register, formState, handleSubmit, reset, watch } = useForm<formData>(
    {
      mode: "onChange",
    }
  );

  const watchMortgageType = watch("mortgageType");

  const mortgageAmountError = formState.errors["mortgageAmount"]?.message;
  const mortgageTermError = formState.errors["mortgageTerm"]?.message;
  const interestRateError = formState.errors["interestRate"]?.message;
  const mortgageTypeError = formState.errors["mortgageType"]?.message;

  const onSubmit: SubmitHandler<formData> = (data) => {
    handleCalculateRepayments(data);
    console.log(data);
  };

  const handleCalculateRepayments = (data: formData) => {
    const { mortgageAmount, mortgageTerm, interestRate, mortgageType } = data;
    const rate = interestRate / 100 / 12;
    const numberOfPayments = mortgageTerm * 12;
    let repayment = 0;

    if (mortgageType === "Repayment") {
      repayment =
        (mortgageAmount * rate) / (1 - Math.pow(1 + rate, -numberOfPayments));
    } else if (mortgageType === "Interest Only") {
      repayment = mortgageAmount * rate;
    }

    setMonthlyRepayment(repayment);
    setTotalRepayments(repayment * numberOfPayments);
  };

  return (
    <div className={styles.calculatorComponent}>
      {/* formSideContainer */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.formSideContainer}
      >
        {/* Header */}
        <div className={styles.formSideHeader}>
          <p className={styles.formSideHeaderTitle}>Mortgage Calculator</p>
          <button
            type="button"
            className={styles.formSideHeaderButton}
            onClick={() => {
              reset();
              setMonthlyRepayment(0);
              setTotalRepayments(0);
            }}
          >
            Clear All
          </button>
        </div>
        {/* <-----> */}
        {/* Mortgage Amount */}
        <div className={styles.mortgageAmountContainer}>
          <label className={styles.inputTitle}>Mortgage Amount</label>
          <div
            className={`${styles.inputContainer} ${
              mortgageAmountError && styles.inputContainerError
            }`}
          >
            <div
              className={`${styles.currencyContainer} ${
                mortgageAmountError && styles.errorContainer
              }`}
            >
              <p
                className={`${styles.currency} ${
                  mortgageAmountError && styles.errorInputMark
                }`}
              >
                £
              </p>
            </div>
            <input
              className={styles.input}
              type="number"
              {...register("mortgageAmount", {
                required: "This field is required",
              })}
            />
          </div>
          {mortgageAmountError && (
            <p className={styles.errorText}>{mortgageAmountError}</p>
          )}
        </div>
        {/* <-----> */}
        {/* Mortgage Term and Interest Rate */}
        <div className={styles.mortgageTermAndInterestRateContainer}>
          {/* Mortgage Term */}
          <div>
            <label className={styles.inputTitle}>Mortgage Term</label>
            <div
              className={`${styles.inputContainers} ${
                mortgageTermError && styles.inputContainerError
              }`}
            >
              <input
                className={styles.input}
                type="number"
                {...register("mortgageTerm", {
                  required: "This field is required",
                })}
              />
              <div
                className={`${styles.inputLabelContainer} ${
                  mortgageTermError && styles.errorContainer
                }`}
              >
                <label
                  className={`${styles.inputLabel} ${
                    mortgageTermError && styles.errorInputMark
                  }`}
                >
                  years
                </label>
              </div>
            </div>
            {mortgageTermError && (
              <p className={styles.errorText}>{mortgageAmountError}</p>
            )}
          </div>
          {/* <-----> */}

          {/* Interest Rate */}
          <div>
            <label className={styles.inputTitle}>Interest Rate</label>
            <div
              className={`${styles.inputContainers} ${
                interestRateError && styles.inputContainerError
              }`}
            >
              <input
                className={styles.input}
                type="number"
                {...register("interestRate", {
                  required: "This field is required",
                })}
              />
              <div
                className={`${styles.inputLabelContainer} ${
                  interestRateError && styles.errorContainer
                }`}
              >
                <label
                  className={`${styles.inputLabel} ${
                    interestRateError && styles.errorInputMark
                  }`}
                >
                  %
                </label>
              </div>
            </div>
            {interestRateError && (
              <p className={styles.errorText}>{mortgageAmountError}</p>
            )}
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
            <label
              className={`${styles.radioContainer} ${
                watchMortgageType === "Repayment" &&
                styles.selectedRadioContainer
              }`}
            >
              <input
                className={styles.radio}
                type="radio"
                value="Repayment"
                {...register("mortgageType", {
                  required: "This field is required",
                })}
              />
              <span className={styles.inputRadioTitle}>Repayment</span>
            </label>
            {/* <-----> */}

            {/* Interest Only */}
            <label
              className={`${styles.radioContainer} ${
                watchMortgageType === "Interest Only" &&
                styles.selectedRadioContainer
              }`}
            >
              <input
                className={styles.radio}
                type="radio"
                value="Interest Only"
                {...register("mortgageType", {
                  required: "This field is required",
                })}
              />
              <span className={styles.inputRadioTitle}>Interest Only</span>
            </label>
            {mortgageTypeError && (
              <p className={styles.errorText}>{mortgageTypeError}</p>
            )}
            {/* <-----> */}
          </div>

          {/* <-----> */}
        </div>

        <button type="submit" className={styles.calculateButton}>
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
        {monthlyRepayment === 0 || totalRepayments === 0 ? (
          <PreResultsComponent />
        ) : (
          <ResultsComponent
            monthlyRepayment={monthlyRepayment}
            totalRepayments={totalRepayments}
          />
        )}
      </div>
      {/* <-----> */}
    </div>
  );
};
