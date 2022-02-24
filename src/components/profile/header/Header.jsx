import React from 'react';
import style from './Header.module.scss'
import Information from './information/Information.jsx'
import AvatarBlock from './avatarblock/AvatarBlock.jsx'

const Header = () => {
  return (    
      <header className={style.header}>
        <h1 className={style.title}>Your Bro</h1>
        <Information />
        <AvatarBlock />
      </header>    
  )
}

export default Header;