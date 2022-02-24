import React from 'react';
import style from './Logo.module.scss';
import  logo from './img/logo.ico';
const Logo = () => {
  return (
    <div  className={style.wrapper}>
      <img src={logo} className={style.logo} alt='logo'></img>
    </div>
  )
}

export default Logo;