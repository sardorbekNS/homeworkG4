import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Setstate from './setstate';
import Buttton from './buttton';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Setstate name = "Nurbek"/>
    <h1>setout  : </h1>
    <Buttton>
      nmadir
    </Buttton>
  </React.StrictMode>
);


  



