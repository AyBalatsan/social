import React from 'react';
import style from './Chat.module.scss';
import Massage from './massage/Massage.jsx'
import TextArea from './textArea/TextArea.jsx'

const Chat = (props) => {
  return(
    <section className={style.chat}>
      <h2>Сообщения:</h2>
      <ul className={style.list}>
        { props.message.map( m => <Massage text={m.massage} />) }             
      </ul>
      <TextArea /> 
    </section>
  )
}

export default Chat;