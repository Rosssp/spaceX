import React, { useEffect, useRef, useState } from "react";
import styles from "./benefits.module.scss";
export default function Benefits() {
    const items = [
        { header: "мы", main: "1", footer: "на рынке" },
        { header: "гарантируем", main: "50%", footer: "безопасность" },
        {
            header: "каленрарик за",
            main: "2001",
            span: "г.",
            footer: "в подарок",
        },
        { header: "путешествие", main: "597", footer: "дней" },
    ];

    const conRef = useRef(null);
    const outerRef = useRef(null);

    useEffect(() => {
        const array = [];
        array.push(conRef.current?.childNodes);
        const handleWindowMouseMove = (event) => {
            array[0].forEach((col) => {
                let rect = col.getBoundingClientRect();
                let x = event.clientX - rect.left;
                let y = event.clientY - rect.top;
                col.style.setProperty("--mouse-x", `${x}px`);
                col.style.setProperty("--mouse-y", `${y}px`);
            });
        };
        window.addEventListener("mousemove", handleWindowMouseMove);
    }, []);

    return (
        <>
            <div className={styles.container} ref={conRef}>
                {items.map((item, index) => (
                    <div
                        className={styles.container__item_outer}
                        ref={outerRef}
                        key={index}
                    >
                        <div className={styles.container__item}>
                            <p className={styles.header}>{item.header}</p>
                            <p className={styles.main}>
                                {item.main}
                                <span>{item?.span}</span>
                            </p>
                            <p className={styles.footer}>{item.footer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
