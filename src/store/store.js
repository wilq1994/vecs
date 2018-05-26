import { combineReducers, createStore } from 'redux';

import document from './reducers/document';
import members from './reducers/members';
import user from './reducers/user';
import modal from './reducers/modal';
import toolbar from './reducers/toolbar';

const reducers = {
  document,
  members,
  user,
  modal,
  toolbar
}

const App = combineReducers(reducers);

export default createStore(App, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());