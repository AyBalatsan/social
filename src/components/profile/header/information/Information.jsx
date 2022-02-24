import React from 'react';
import style from './Information.module.scss'

const Information = () => {
  return (    
    <div className={style.information}>
      <ul className={style.infoList}>
        <li className={style.infoItem}><span>City</span><span>Omsk</span></li>
        <li className={style.infoItem}><span>Birthday</span><span>25.04.1992</span></li>
        <li className={style.infoItem}><span>About Me</span><span>I do not know</span></li>
      </ul>
    </div>
        
  )
}

export default Information;