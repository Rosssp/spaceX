import React from "react";
import styles from "./button.module.scss";

export default function Button() {
    return (
        <div className={styles.outer}>
            <div className={styles.button}>
                <p>Начать путешествие</p>
            </div>
        </div>
    );
}
