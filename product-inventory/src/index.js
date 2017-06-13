import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App.jsx';
import registerServiceWorker from './app/registerServiceWorker';
import './app/index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
