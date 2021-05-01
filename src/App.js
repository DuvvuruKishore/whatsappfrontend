import React,{useState,useEffect} from 'react';
import './App.css';
import Chat from './Chat';
import SideBar from './SideBar';
import Pusher from 'pusher-js';
import axios from './axios';


function App() {

  const [messages,setMessages]=useState([]);
  useEffect(()=>{
    axios.get('/messages/sync').then(response=>{
      setMessages(response.data);
      
    })
    
  },[]);

  useEffect(()=>{
    const pusher = new Pusher('edf71b2b26eb56bcabcb', {
      cluster: 'ap2'
    });
  
    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage)=> {
      setMessages([...messages,newMessage])
    });

    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }
  
  },[messages])

  console.log(messages);
  
  return (

    <div className="app">
    <div className="app_body">
      <SideBar/>
      <Chat messages={messages}/>
    </div>
    </div>
  );
}

export default App;
