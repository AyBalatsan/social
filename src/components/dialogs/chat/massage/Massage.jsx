import React from 'react';
import style from './Massage.module.scss';
import ava from './img/ava3.jpg'

const Massage = (props) => {
  return(
    <li className={style.item}>
      <img src={ava} className={style.avatar} alt="avatar" />
      <p className={style.text}>{props.text}</p>
    </li>
  )
}

export default Massage; 