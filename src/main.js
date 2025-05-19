import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store, persistor } from './app/store';
import { PersistGate } from "redux-persist/integration/react";
import App from './App';
import './styles/global.scss'; // Đảm bảo chỉ nhập ở đây
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(React.StrictMode, null,
    React.createElement(Provider, { store: store },
        React.createElement(PersistGate, { loading: null, persistor: persistor },
            React.createElement(App, null)))));
