import React from 'react';
import { createRoot } from 'react-dom/client';

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeContext } from "./shared/ThemeContext";

const rootElementRef = document.getElementById('root');
const root = createRoot(rootElementRef!);
root.render(
  <React.StrictMode>
  <ThemeContext>
    <App />
  </ThemeContext>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
