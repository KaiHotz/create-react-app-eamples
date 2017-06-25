import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger'
import { firebaseApp } from './firebase';
import { logUser } from './actions';
import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import reducer from './reducers';

import './styles/styles.css';

const history = createHistory();

const logger = createLogger({
  collapsed: (getState, action, logEntry) => !logEntry.error
});


const store = createStore(
  reducer,
  applyMiddleware(logger)
);

firebaseApp.auth().onAuthStateChanged(user => {
  if(user) {
    const { email } = user;
    store.dispatch(logUser(email));
    history.push('/app');
  } else {
    history.push('/signin');
  }
})

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter path='/' history={ history }>
        <Switch>
          <Route path='/signin/' component={SignIn}/>
          <Route path='/signup/' component={SignUp}/>
          <Route path='/app' component={App} />
        </Switch>
    </BrowserRouter>
  </Provider>, document.getElementById('root')
);
