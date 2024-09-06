import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import './index.css';
import reportWebVitals from './reportWebVitals';
import BookApp from './CLASS/BookApp';
import Concluding from './jsx_file/Concluding';
// import RouterApp from './Router/RouterApp';
// import ClassGBB from './jsx_file/ClassGBB';
// import ClassCalc from './jsx_file/ClassCalc';
// import EventP from './jsx_file/EventP';
// import InputP from './jsx_file/InputP';
// import ArrayP from './jsx_file/ArrayP';
// import StateP from './jsx_file/StateP';
// import TextDeliverP from './jsx_file/TextDeliverP';
// import Calculator from './jsx_file/Calculator';
// import Form from './jsx_file/Form';
// import APIuser from './jsx_file/APIuser';
// import ComponentReuse from './jsx_file/ComponentReuse';
// import IfRender from './jsx_file/IfRender';
// import ToDoList from './jsx_file/ToDoList';
// import ListRendering from './jsx_file/ListRendering';
// import NumberCount from './jsx_file/NumberCount';
// import UserInput from './jsx_file/UserInput';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <UserInput/> */}
    {/* <NumberCount/> */}
    {/* <ListRendering/> */}
    {/* <ToDoList/> */}
    {/* <IfRender/> */}
    {/* <ComponentReuse/> */}
    {/* <ComponentReuse/> */}
    {/* <Form/> */}
    {/* <APIuser/> */}
    {/* <Calculator/> */}
    {/* <TextDeliverP/> */}
    {/* <StateP/> */}
    {/* <ArrayP/> */}
    {/* <InputP/> */}
    {/* <EventP/> */}
    {/* <ClassCalc/> */}
    {/* <ClassGBB/> */}
    {/* <RouterApp/> */}


    <RecoilRoot>
    <BookApp/>
    </RecoilRoot>

    {/* <Concluding/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
