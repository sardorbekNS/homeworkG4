import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Button from './sard';
import Student from './App';
import State from './state';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Button>
      <h1 style={{color:"red",background:"yellow",width:"14vh" }}>react</h1>
    </Button>
    <Student addres ="Mahallada" eshmat = "Wbb "/>
    <State/>
  </React.StrictMode>
);


  




