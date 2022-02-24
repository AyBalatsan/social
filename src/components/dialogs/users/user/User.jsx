import React from 'react';
import style from './User.module.scss';
import { NavLink } from 'react-router-dom';

const User = (props) => {
  return(    
  <li className={style.list}>
    <NavLink activeClassName={style.active} to={"/Dialogs/" + props.address} className={style.link}>{props.nameUser} {props.surname}</NavLink>
  </li>    
  )
}

export default User;