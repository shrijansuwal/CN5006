import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GreetingElement from './myGreeting';
import GreetingElementsWithProps from './myGreetingWithProps';
import AppColor from './AppBackgroundColor';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppColor heading='This is first Element' lb1='Name :'
    color='green'/>
    <AppColor heading='This is Second Element' lb1='Name :'
    color='black'/>
    <AppColor heading='This is first Element' lb1='Name :'
    color='yellow'/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
