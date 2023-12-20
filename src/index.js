import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import { createRoot } from 'react-dom/client';
import '@/assets/css/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'tailwindcss/tailwind.css';

// Create the root container and render the app
const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer);
root.render(<App />);

// Performance testing
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
