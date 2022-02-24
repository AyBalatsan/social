import React from 'react';
import style from './Users.module.scss';
import User from './user/User.jsx';

const Users = (props) => { 
  return(    
  <section className={style.users}>
    <h2>Users</h2>
    <ul className={style.list}>
      { props.users.map( u => <User address={u.id} nameUser={u.nameUser} surname={u.surname} />) }
    </ul>
  </section>      
  )
}

export default Users;