import React from 'react';
import style from './AvatarBlock.module.scss'
import avatarka from './img/avatarka.jpg'

const AvatarBlock = () => {
  return (    
    <div className={style.avatarBlock}>
      <img src={avatarka} alt="avatar" className={style.avatar} />
      <button className={style.button}>Add as Friend</button>
      <button className={style.button}>Write a message</button>        
    </div> 
  )
}

export default AvatarBlock;