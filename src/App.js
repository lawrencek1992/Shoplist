import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { useStorageState } from "react-storage-hooks";
import './App.css';
import './custom.scss';
import firebase from './firebase.js';

import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  const [user, setUser] = useStorageState(localStorage, `state-user`, {});
  
  const onLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser({});
      })
      .catch((error) => console.error(error));
  };

  return (
    <Router>
        <div className="App">
          <Header 
            user={user}
            setUser={setUser}
            onLogout={onLogout}
          />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Home user={user} />
              )}
            />
            <Route
              exact
              path="/login"
              render={() => <Login user={user} setUser={setUser} />}
            />
            </Switch>
        </div>
    </Router>
  );
}

export default App;
