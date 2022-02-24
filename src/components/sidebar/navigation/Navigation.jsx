import React from 'react';
import style from './Navigation.module.scss'
import { NavLink } from 'react-router-dom';
import Profile from './img/user.svg'
import Dialogs from './img/messages.svg'
import News from './img/news.svg'
import Music from './img/headphones.svg'
import Settings from './img/cog.svg'

const Navigation = () =>{
  return (
    <nav className='navigation'>
      <ul className={style.list}>
        <li className={style.item}><NavLink activeClassName={style.active} className={style.link} to='/Profile'><img className={style.img} src={Profile}  alt='Profile' />Profile</NavLink></li>
        <li className={style.item}><NavLink activeClassName={style.active} className={style.link} to='/Dialogs'><img className={style.img} src={Dialogs}  alt='Messages' />Messages</NavLink></li>
        <li className={style.item}><NavLink activeClassName={style.active} className={style.link} to='/News'><img className={style.img} src={News}  alt='News' />News</NavLink></li>
        <li className={style.item}><NavLink activeClassName={style.active} className={style.link} to='/Music'><img className={style.img} src={Music}  alt='Music' />Music</NavLink></li>
        <li className={style.item}><NavLink activeClassName={style.active} className={style.link} to='/Settings'><img className={style.img} src={Settings}  alt='Settings' />Settings</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navigation;