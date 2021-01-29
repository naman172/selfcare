import styles from "../css/Slider.module.css";
import SimpleCard from "./SimpleCard";

const Slider = () => (
  <div className={styles.holder}>
    <SimpleCard className={styles.card} />
    <SimpleCard className={styles.card} />
    <SimpleCard className={styles.card} />
    <SimpleCard className={styles.card} />
  </div>
);

export default Slider;
