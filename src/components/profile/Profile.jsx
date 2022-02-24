import React from 'react';
import style from './Profile.module.scss'
import Post from './post/Post.jsx'
import Header from './header/Header.jsx'
import TextArea from './textArea/TextArea.jsx'

const Profile = (props) => { 
  return (
    <main className={style.wrapper}>
      <Header />
      <TextArea addPost={props.addPost} />            
      { props.posts.map( p => (<Post like={p.likeCounter} massage={p.massage} />) ) }
    </main>
  )
}

export default Profile;