import { Button } from "@material-ui/core";
import styles from "../css/IconBox.module.css";
const IconBox = () => (
  <div className={styles.buttonHolder}>
    <Button className={styles.button}>Stressed</Button>
    <Button className={styles.button}>Exhausted</Button>
    <Button className={styles.button}>Ugly</Button>
  </div>
);

export default IconBox;
