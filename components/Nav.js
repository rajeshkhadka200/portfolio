// React imports 
import Link from "next/link";
import React from "react";

//CSS imports 
import style from "../styles/nav.module.css";

//icons
// import { MenuIcon } from '@mui/icons-material/Menu';

const Nav = () => {
  return (
    <>

      <div className={style.header}>
        <div className={style.logo}> <Link href={"/"}>Rajesh</Link> </div>
        <div className={style.links}>
          <Link href={"/"}>home</Link>
          <Link href={"/contact"}>passion</Link>
          <Link href={"/"}>works</Link>
          <Link href={"/contact"}>
            <span className={style.navContact}>Hire me</span>
          </Link>
        </div>
      </div>

    </>
  );
};

export default Nav;
