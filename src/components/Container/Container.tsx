import styles from "./Container.module.scss";

interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <div className={styles.container}>
      <div>{children}</div>
    </div>
  );
};
