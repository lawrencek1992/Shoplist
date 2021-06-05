import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import './custom.scss';
import firebase from './firebase.js';

import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  const [user, setUser] = useState({});

  const onLogin = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
          setUser({
            email: response.user["email"],
            isAuthenticated: true,
            // set userID from the uid in firebase (or something?)
          });
      })
      .catch((error)  => console.error(error));
  };
  
  const onLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser({ isAuthenticated: false});
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
              render={() => <Login onLogin={onLogin} />}
            />
            </Switch>
        </div>
    </Router>
  );
}

export default App;
