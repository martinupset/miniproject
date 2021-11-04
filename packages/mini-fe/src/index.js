import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
import store from './redux/store'
import { persistor } from "./redux/store/index";
import { PersistGate } from "redux-persist/lib/integration/react";

ReactDOM.render(
<Provider store = {store}>
<PersistGate loading={null} persistor={persistor}>
<App />
</PersistGate>
</Provider>,  document.getElementById('root'));
