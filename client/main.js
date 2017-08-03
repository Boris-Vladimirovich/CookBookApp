import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/store';
import CookbookApp from './containers/CookbookApp.jsx';

ReactDOM.render(
    <Provider store={store}>
        <CookbookApp/>
    </Provider>,
    document.getElementById("app"));