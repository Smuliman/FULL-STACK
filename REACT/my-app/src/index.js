/* import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); */
import React from "react";
import ReactDOM from "react-dom";

const App = () => (
  <div>
    <h1>Ensimmäinen React sovellukseni!</h1>
    <Jumbo />
  </div>
);

const Jumbo = () => (
  <div class="container-fluid p-5 bg-primary text-white text-center">
    <h1> This is my Full Stack project with REST APIs </h1>
    <p>You can add, update and delete your future goals in this application</p>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
