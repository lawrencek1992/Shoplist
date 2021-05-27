import React, { useState } from 'react';
import './App.css';
import './custom.scss';

import List from './components/List';
import AddButton from './components/AddButton';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <List />
      <AddButton />
    </div>
  );
}

export default App;
