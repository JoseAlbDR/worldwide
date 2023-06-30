import styles from "./Button.module.css";
function Button({ children, onClick, type }) {
  console.log(onClick);
  return (
    <button className={`${styles.btn} ${styles[type]}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
