import React from "react";
import styles from "./Home.module.css"; // Import your CSS module here
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className={styles.home}>
      <header>
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <img src={require("./Images/logo.png")} alt="Home" />
          </div>
          <ul className={styles["nav-area"]}>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/home">Competition</a>
            </li>
            <li>
              <a href="/test">Test Yourself</a>
            </li>
            <li>
              <a href="/home">Track</a>
            </li>
            <li>
              <a href="/home">About</a>
            </li>
            <li>
              <Link to="/login" className={styles["a"]}>
                Login
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles["welcome-text"]}>
          <h1>
            <span>KIDDO</span>
          </h1>
          <h2>
            <span>👪 Parenting</span> with Purpose, <span>Advising</span> with Heart 💖
          </h2>

          <div className={styles["buttons-reg"]}>
            <Link to="/consults" className={styles["a"]}>
              Talk With Advisor
            </Link>
            <Link to="/parentCommunity" className={styles["a"]}>
              Parent Community
            </Link>
          <Link to="/product" className={styles["a"]}>
              Child Products
            </Link>
            <Link to="/Video" className={styles["a"]}>
              Virtual Program
            </Link>
            <Link to="/dashboard" className={styles["a"]}>
              Child Corner
            </Link>
            <Link to="/Books" className={styles["a"]}>
              E-books
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
