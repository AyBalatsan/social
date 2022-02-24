import React from 'react';
import './App.scss';
import Navigation from './components/sidebar/navigation/Navigation.jsx';
import Header from './components/header/Header.jsx';
import Profile from './components/profile/Profile.jsx';
import Dialogs from './components/dialogs/Dialogs';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header className='header' />
        <Navigation className='navigation' />
        <div className='content'>          
          <Route path='/Profile' render={ () => <Profile 
            posts={props.date.profile.posts}
            addPost={props.addPost}
          />} />
          <Route path='/Dialogs' render={ () => <Dialogs message={props.date.dialog.messages} users={props.date.dialog.users}  />} />
          <Route path='/News' render={News} />  
          <Route path='/Music' render={Music} />  
          <Route path='/Settings' render={Settings} />            
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
