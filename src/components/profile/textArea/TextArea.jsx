import React from 'react';
import style from './TextArea.module.scss'

const TextArea = (props) => {
  const newPostElement = React.createRef()
  const addPost = () =>{
    let text = newPostElement.current.value
    props.addPost(text)
  }
  
  return (
    <div className={style.container}>
      <form className={style.form}>
        <label className={style.labels}>New post</label>
        <div className={style.textareaShell}>
          <textarea ref={newPostElement} className={style.textarea} name="textarea_description" rows="4" cols="37" placeholder="Write your description here..."></textarea>
        </div>
        <button 
          className={style.button}
          onClick={ addPost }
        >Send a message</button>
      </form>
    </div>
  )
}

export default TextArea;