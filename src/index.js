import React from 'react';
import ReactDOM from 'react-dom';
import '../src/Styles/index.css';
import App from './Conteiners/App';
import * as serviceWorker from './serviceWorker';
//setup fake backend
//import { configureFakeBackend } from './Componentes/Componentes-login/helpers/fake-backend';
//configureFakeBackend();

ReactDOM.render(
<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
