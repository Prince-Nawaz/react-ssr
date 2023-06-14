import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    BrowserRouter,
    // RouterProvider,
    // createBrowserRouter,
} from 'react-router-dom';
// import process from 'process';

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    // development build code
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            {/* <RouterProvider router={router}></RouterProvider> */}
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    );
    console.log('Dev', process.env.NODE_ENV, process.env);
} else {
    // production build code
    console.log('ssr', process.env.NODE_ENV, process.env);
    ReactDOM.hydrateRoot(
        document.getElementById('root'),
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    );
}



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
