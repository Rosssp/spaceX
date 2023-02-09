import React from "react";
import styles from "./header.module.scss";
import images from "../../../constants/images";

export default function Header() {
    const navItem = [
        { title: "Главная", url: "" },
        { title: "Технология", url: "" },
        { title: "График полетов", url: "" },
        { title: "Гарантии", url: "" },
        { title: "О компании", url: "" },
        { title: "Контакты", url: "" },
    ];
    return (
        <header className={styles.header}>
            <div className={`main__wrapper ${styles.header__container}`}>
                <div className={styles.logo}>
                    <img src={`${images.logo}`} alt="" />
                </div>
                <ul className={styles.nav__menu}>
                    {navItem.map((item, index) => (
                        <li key={index}>
                            <a href="">{item.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}
