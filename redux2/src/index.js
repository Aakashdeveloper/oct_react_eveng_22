import React from 'react';
import ReactDOM from 'react-dom';
import Routing from './component/Routing';
import {Provider} from 'react-redux';
import store from './store/storeFile';

ReactDOM.render(
    <Provider store={store}>
        <Routing/>
    </Provider>,document.getElementById('root')
)