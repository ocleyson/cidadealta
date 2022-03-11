import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { store } from './app/reduxStore';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import AuthenticatedApp from './components/AuthenticatedApp';
import About from './pages/About';
import Create from './pages/Create';
import Update from './pages/Update';

ReactDOM.render(
  	<React.StrictMode>
        <Router>
            <Provider store={store}>
                <App>
                    <Routes>
                        <Route path="/" element={<SignIn />} />
                        <Route path="/authenticated" element={<AuthenticatedApp/>}>
                            <Route path="home" element={<Home />} />
                            <Route path="about/:penalCodeId" element={<About />} />
                            <Route path="create" element={<Create />} />
                            <Route path="edit/:penalCodeId" element={<Update />} />
                        </Route>
                    </Routes>
                </App>
            </Provider>
        </Router>
    </React.StrictMode>,
  document.getElementById('root')
);
