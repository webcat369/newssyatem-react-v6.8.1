import React from 'react';
// import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import Router from './router';
import '../src/assets/css/index.css'
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const root = createRoot(document.getElementById('root')!)
export default root.render(
  <RecoilRoot>
    <Router />
  </RecoilRoot>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
