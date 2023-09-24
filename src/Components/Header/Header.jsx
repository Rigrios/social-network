import React from "react";
import style from "./Header.module.css";

function Header(props) {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.header__body}>
          <div className={style.logo}>
            <div className={style.logoIcon}></div>
            <div className={style.logoText}>Rigrios</div>
          </div>
          <input type="text" className={style.input} placeholder="Поиск" />
        </div>
      </div>
    </header>
  );
}

export default Header;
