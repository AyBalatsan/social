import React from 'react';
import style from './Dialogs.module.scss';
import Chat from './chat/Chat.jsx';
import Users from './users/Users.jsx';

const Dialogs = (props) => {    
  return(
    <main className={style.wrapper}>
      <Users users={props.users} />
      <Chat message={props.message} />
    </main>
  )
}

export default Dialogs;