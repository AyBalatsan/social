import React from 'react';
import style from './Header.module.scss';
import Logo from './logo/Logo.jsx';
import Title from './title/Title.jsx';
import Authorization from './authorization/Authorization.jsx';

const Header = () =>{
  return (
    <header className={style.wrapper}>
      <Logo className={style.logo} />
      <Title className={style.title} />
      <Authorization className={style.authorization} />
    </header>
  )
}

export default Header;