import styles from "./PreResultsComponent.module.scss";
import { ReactComponent as PreResultIcon } from "assets/images/Layer_1.svg";

interface PreResultsComponentProps {}

export const PreResultsComponent = ({}: PreResultsComponentProps) => {
  return (
    <div className={styles.preResultsComponent}>
      <PreResultIcon />
      <p className={styles.preResultsTitle}>Results shown here</p>
      <p className={styles.preResultsDescription}>
        Complete the form and click “calculate repayments” to see what your
        monthly repayments would be.
      </p>
    </div>
  );
};
