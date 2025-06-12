import styles from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={styles.loader__container}>
        <div className={styles["lds-default"]}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}
