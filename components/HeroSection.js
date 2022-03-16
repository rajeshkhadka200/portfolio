import React from "react";
import style from "../styles/HeroSection.module.css";
const HeroSection = () => {
    return (
        <>
            <div className={style.wrapper}>
                <div className={style.heroLeftSide}>
                    <div className={style.header}>
                        Hi, I'm <span>Rajesh! </span> 👋

                    </div>
                    <p>
                        A passionate fullstack developer who design and develops web app and mobile
                        app.
                    </p>
                    <div className={style.butonGroup}>
                        <button>Get in touch</button>
                        <button className={style.btnSecond}>View portfolio</button>
                    </div>
                </div>
                <div className={style.heroRightSide}>
                    <img src="/static/logo.png" alt="logo" />
                </div>
            </div>
        </>
    );
};

export default HeroSection;
