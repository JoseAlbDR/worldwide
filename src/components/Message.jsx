import Button from "./Button";
import { useCities } from "../context/CityContext";
import styles from "./Message.module.css";

function Message({ message }) {
  const { isError, dispatch } = useCities();
  return (
    <>
      <p className={styles.message}>
        <span role="img">👋</span> {message}
      </p>
      {isError && (
        <Button type="primary" onClick={() => dispatch({ type: "clearError" })}>
          Clear
        </Button>
      )}
    </>
  );
}

export default Message;
