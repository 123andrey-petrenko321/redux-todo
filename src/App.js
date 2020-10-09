import React from 'react';
import './App.css'
import PostForm from './Component/PostForm';
import Posts from './Component/Posts';

function App() {
  const clickHandler = () => {
    console.log('event')
  }
  return (
    <div className="App ">
      <h2>Мои задачи</h2>
      <div className="col">
        <PostForm />
      </div>
      <div className="col">
        <h2>Список задач</h2>
        <Posts click={clickHandler} />
      </div>
    </div>
  );
}

export default App;
