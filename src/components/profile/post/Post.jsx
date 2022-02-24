import React from 'react';
import style from './Post.module.scss'
import  avatar from './img/avatar.png'
import  like from './img/like.png'

const Post = (props) =>{
  return(
    <div className={style.wrapper}>
      <div className={style.comment}>
        <img className={style.avatar} src={avatar} alt='ava' />
        <p className={style.title}>{ props.massage }</p>
      </div>
      <span className={style.like}><img className={style.heard} src={like} />{props.like}</span>      
    </div> 
  )
}

export default Post;