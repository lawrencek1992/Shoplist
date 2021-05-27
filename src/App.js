import React from 'react';
import './App.css';
import'bootstrap/dist/css/bootstrap.min.css';

import List from './components/List';
import AddButton from './components/AddButton';

function App() {
  return (
    <div className="App">
      <List />
      <AddButton />
    </div>
  );
}

export default App;
