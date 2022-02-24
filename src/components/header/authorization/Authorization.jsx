import React from 'react';
import style from './Authorization.module.scss'
import { NavLink } from 'react-router-dom';
import  enter from './img/enter.png'
import Settings from './img/cog.svg'
const Authorization = () => {
  return (
    <div className={style.wrapper}>
      <ul className={style.list}>
        <li className={style.item}><NavLink to='/Settings'><img src={Settings} className={style.img} alt='Settings' /></NavLink></li>
        <li className={style.item}><NavLink to='/Settings'><img src={enter} className={style.img} alt='HZ' /></NavLink></li>
        <li className={style.item}><NavLink to='/Settings'><img src={enter} className={style.img}  alt='HZ' /></NavLink></li>
      </ul>
    </div>
  )
}

export default Authorization;