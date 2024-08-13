import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ToDoList from './jsx_file/ToDoList';
// import ListRendering from './jsx_file/ListRendering';
// import NumberCount from './jsx_file/NumberCount';
// import UserInput from './jsx_file/UserInput';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <UserInput/> */}
    {/* <NumberCount/> */}
    {/* <ListRendering/> */}
    <ToDoList/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
