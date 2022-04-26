import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from 'react-redux';
import { store } from './configure-store';
import { Container } from './counter/container';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);


  
