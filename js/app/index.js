import React, { Component } from 'react';

import codePush from 'react-native-code-push';
import * as storage from 'redux-storage'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createEngine from 'redux-storage-engine-reactnativeasyncstorage';

import Layout from './layout';
import reducers from './reducers';

const reducer = storage.reducer(combineReducers(reducers));
const engine = createEngine('my-save-key');
const middleware = storage.createMiddleware(engine, [
  //don't save states related to following actions (blacklsist):
  'ON_UPDATE_COUNTER'
], [
]);
const createStoreWithStorageMiddleware = applyMiddleware(middleware)(createStore);
const createStoreWithThunkMiddleware = applyMiddleware(thunk)(createStoreWithStorageMiddleware);
const store = createStoreWithThunkMiddleware(reducer);

// engine.save({}); //clear redux-storage data

const load = storage.createLoader(engine);
load(store);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Layout />
      </Provider>
    );
  }
}

App = codePush({ updateDialog: true, installMode: codePush.InstallMode.IMMEDIATE })(App);

module.exports = App;