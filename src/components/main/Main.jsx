import React from "react";
import images from "../../constants/images";
import useMediaQuery from "../../hooks/useMediaQuery";
import Benefits from "../benefits/Benefits";
import Button from "../UI/button/Button";
import styles from "./main.module.scss";

export default function Main() {
    const mobileView = useMediaQuery(890);

    return (
        <div className={styles.main} style={{ position: "relative" }}>
            <div className={styles.background}>
                <div className={`main__wrapper ${styles.main__container}`}>
                    <div className={styles.main__side}>
                        <div className={styles.title}>
                            <h1>
                                ПУТЕШЕСТВИЕ <br />
                                <span>
                                    <p>на красную планету</p>
                                </span>
                            </h1>
                        </div>
                        <div className={styles.button}>
                            <Button />
                            {/* <div className={styles.button__tail}>
                                <img src={`${images.buttonTail}`} alt="" />
                            </div> */}
                        </div>
                    </div>
                    {mobileView ? (
                        ""
                    ) : (
                        <div>
                            <Benefits />
                        </div>
                    )}
                </div>
            </div>
            {mobileView && (
                <div>
                    <Benefits />
                </div>
            )}
        </div>
    );
}
