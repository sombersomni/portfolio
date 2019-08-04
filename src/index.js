import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer from './reducer'
const initialState = {
    theme: ['#FFF7AE', '#FF9922', '#D81159', '#1B1B3A', '#F7F7FF', '#D9F0FF'],
    mobile: false
}
const store = createStore(reducer, initialState)
const ReduxApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
)
ReactDOM.render(<ReduxApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
