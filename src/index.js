import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import { App } from 'components/App';
import { persistor, store } from './redux/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/carency-exchange">
         <PersistGate loading={null} persistor={persistor}>
        
        <App />
      </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
