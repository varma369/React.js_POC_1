import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//For Routing npm install --save react-route react-router-dom
import { BrowserRouter } from 'react-router-dom';
//provider for connecting store to react
import { Provider } from 'react-redux';
//for connecting react-redux -->npm install --save redux
import { createStore } from 'redux';
import reducer from './store/reducer';

const store = createStore(reducer);
const app=(
<Provider store={store}>
<BrowserRouter><App />
</BrowserRouter></Provider>
);
ReactDOM.render(app,document.getElementById('root'));
//ReactDOM.render(<Provider store={store}><App/> </Provider>, document.getElementById('root'));


registerServiceWorker();