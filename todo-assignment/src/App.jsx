import React from 'react';
import './App.css';
import Profile from './components/Profile';
import TodoList from './components/TodoList';

const profile=[
 {
  id: 100,
  name:"Swapnil Meshram",
  profileImage:"https://avatars.githubusercontent.com/u/41813408?v=4",
  age:18,
  location:"Nagpur",
  organization:"Asha Institute",
  show:"false",
  todoList:[
    { id: 1, title: "Wake up", status: true },
    { id: 2, title: "drink tea", status: false },
    { id: 3, title: "eat maggi", status: true },
    { id: 4, title: "sleep", status: false }
  ]
 }
]


function App() {
  return (
    <div className="App">
        {
          profile.map((pProfile)=>
              <Profile {...pProfile} key={pProfile.id}/>
          )
        }
        {
          <TodoList {...profile}/>
        }
    </div>
  );
}

export default App;
