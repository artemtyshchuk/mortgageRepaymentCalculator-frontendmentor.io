import styles from "./ResultsComponent.module.scss";

interface ResultsComponentProps {
  monthlyRepayment: number;
  totalRepayments: number;
}

export const ResultsComponent = ({
  monthlyRepayment,
  totalRepayments,
}: ResultsComponentProps) => {
  return (
    <div className={styles.resultsComponent} data-testid="resultsComponent">
      <p className={styles.resultSideTitle}>Your results</p>
      <p className={styles.resultSideDescription}>
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click “calculate repayments”
        again.
      </p>
      {/* resultSideResultsContainer */}
      <div className={styles.resultSideResultsContainer}>
        <p className={styles.repaymentsText}>Your monthly repayments</p>
        <p className={styles.repaymentsInfo}>£{monthlyRepayment.toFixed(2)}</p>
        <span className={styles.divider}></span>
        <p className={styles.repaymentsText}>
          Total you'll repay over the term
        </p>
        <p className={styles.totalRepaymentsInfo} data-testid="totalRepayments">
          £{totalRepayments.toFixed(2)}
        </p>
      </div>
      {/* <-----> */}
    </div>
  );
};
