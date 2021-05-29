import React, { useState } from 'react';
import { useStorageState } from 'react-storage-hooks';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.css';
import './custom.scss';

import Header from './components/Header';
import Home from './components/Home';


import List from './components/List';
import AddItemForm from './components/AddItemForm';
import Login from './components/Login';

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home/>
            )}
          />
          <Route
            exact
            path="/login"
            render={() => <Login />}
          />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
