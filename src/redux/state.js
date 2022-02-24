import {renderEntireTree} from './../render'

let state ={
  profile: {
    posts: [
      {id: 1, massage: 'Hi, this is my first post', likeCounter: 12},
      {id: 2, massage: 'Hi, this is my second post', likeCounter: 212},
      {id: 3, massage: 'Hi, this is my second post', likeCounter: 282},
      {id: 4, massage: 'Hi, this is my second post', likeCounter: 21},
    ],
  },  
  dialog: {
    messages: [
      {id: 1, massage: 'Hi'},
      {id: 2, massage: 'how a you?'},
      {id: 3, massage: 'Yo'},
      {id: 4, massage: 'how a you?'},
        
    ],
    users: [
      {id: 1, nameUser: 'Job', surname: 'Strickland'},
      {id: 2, nameUser: 'Victor', surname: 'Henderson'},
      {id: 3, nameUser: 'Jennifer', surname: 'Moore'},
      {id: 4, nameUser: 'Juliana', surname: 'Spencer'},
      {id: 5, nameUser: 'Harry', surname: 'Potter'},
      {id: 6, nameUser: 'Margaret', surname: 'Rivers'},
      {id: 7, nameUser: 'Blanche', surname: 'Rogers'}
    ],
  },  
}
export let addPost = (postMessage) => {
  let newPost = {
    id: 3,
    massage: postMessage,
    likeCounter: 0
  }
  state.profile.posts.push(newPost)
  console.log(state.profile.posts)
  debugger

  renderEntireTree(state)
}

export default state;