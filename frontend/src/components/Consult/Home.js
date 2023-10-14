import styles from "../Home/Home.module.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles["welcome-text"]}>
        <h1>
          <span>KIDDO</span>
        </h1>
        <h2>
          <span>Guiding</span> Little Stars: Your <span>Trusted Child</span>{" "}
          Advisor
        </h2>

        <div className={styles["buttons-reg"]}>
          <Link to="/consult2" className={styles["a"]}>
            Book a Consultation
          </Link>
          <Link to="/consult" className={styles["a"]}>
            Emergency
          </Link>
        </div>
      </div>
    </div>
  );
}
