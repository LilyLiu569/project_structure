import React, { Component } from 'react';
import { Provider } from 'react-redux';  
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router} from 'react-router-dom';
import configureStore from './redux/store/configureStore';
import MainRoute from './web_routes';
// import createHistory from 'history/createBrowserHistory'
import HomePage from './modules/homepage/Homepage'
import './App.css';
// const history = createHistory();

const {store,persistor} = configureStore();

class App extends Component {

    render() {
        return (
          <Provider store={store}>
            <PersistGate persistor={persistor}>
              <Router>              
                {MainRoute}
              </Router> 
            </PersistGate>         
          </Provider>
        );
    }
}

export default App;
