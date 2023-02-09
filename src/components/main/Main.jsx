import React from "react";
import Benefits from "../benefits/Benefits";
import Button from "../UI/button/Button";
import styles from "./main.module.scss";

export default function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.background}>
                <div className={`main__wrapper ${styles.main__container}`}>
                    <div className={styles.main__side}>
                        <h1>
                            ПУТЕШЕСТВИЕ <br />
                            <span>на красную планету</span>
                        </h1>
                        <Button />
                    </div>
                    <div>
                        <Benefits />
                    </div>
                </div>
            </div>
        </div>
    );
}
