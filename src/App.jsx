import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import Foot from './components/Foot';
import Slide from './components/Slide';
import PostList from './components/PostList';
import CreatePost from './components/CreatePost';
import { useState } from 'react';
function App() {
  const [s, a] = useState("Home");
  return (
    <>
    <div className="app-container">
      <Slide></Slide>
     <div className="content">
       <Header></Header>
       {s=="Home"?(<PostList></PostList>):(<CreatePost></CreatePost>) }
       <Foot></Foot>
     </div>
    </div>
    </>
  )
}

export default App
