import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { store } from './app/reduxStore';

ReactDOM.render(
  	<React.StrictMode>
        <Provider store={store}>
            <App>
                <h1>Hello World</h1>
            </App>
        </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);
