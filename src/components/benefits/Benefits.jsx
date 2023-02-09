import React, { useEffect, useRef, useState } from "react";
import styles from "./benefits.module.scss";
// 184
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
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleWindowMouseMove = (event) => {
            let rect = outerRef.current.getBoundingClientRect();
            setCoords({
                x: event.clientX - rect.left,
                y: event.clientY - rect.top,
            });
        };
        conRef.current.addEventListener("mousemove", handleWindowMouseMove);
    }, []);

    console.log(coords);

    return (
        <>
            <div className={styles.container} id="wrapper" ref={conRef}>
                {items.map((item, index) => (
                    <div
                        id="outer"
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
