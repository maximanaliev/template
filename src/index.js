import React from 'react';
import {hydrate, render} from "react-dom";
import {Provider} from 'react-redux';
import {ConnectedRouter} from "connected-react-router";
import store, {history} from './store/configureStore';
import App from './App';

const app = (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>
);

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
    hydrate(app, rootElement);
} else {
    render(app, rootElement);
}
