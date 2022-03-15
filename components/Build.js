import React from "react";
//css
import s from "../styles/build.module.css";

//icons
const SecondComp = () => {
  const services = [
    {
      logo: "",
      name: "Web development",
    },
    {
      logo: "",
      name: "App Dev",
    },
    {
      logo: "",
      name: "prototyping",
    },
    {
      logo: "",
      name: "Web hosting",
    },
  ];
  return (
    <>
      <section className={s.wrapper}>
        <div className={s.buildContent}>
          <div className={s.leftSide}>
            <div className={s.card}>
              <div className={s.logo}>

              </div>
              <div className={s.name}>App design</div>
            </div>
            <div className={s.card}>
              <div className={s.logo}>

              </div>
              <div className={s.name}>App design</div>
            </div>
            <div className={s.card}>
              <div className={s.logo}>

              </div>
              <div className={s.name}>App design</div>
            </div>
            <div className={s.card}>
              <div className={s.logo}>

              </div>
              <div className={s.name}>App design</div>
            </div>
          </div>
          <div className={s.rightSide}>
            <div className={s.heading}>
              Let's make meaningful user interfaces and Websites
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SecondComp;
