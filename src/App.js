import React, { useState } from 'react';
import './App.css';
import './custom.scss';

import List from './components/List';
import AddItemForm from './components/AddItemForm';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [listItems, setListItems] = useState([]);

  const handleButtonClick = () => {
    setShowModal(true);
  }

  const handleHide = () => {
    setShowModal(false);
  }

  const addNewItem = (item) => {
    console.log("You're in the addNewItem function!");
    const updatedList = listItems.concat(item);
    setListItems(updatedList);
  }

  return (
    <div className="App">
      <List 
        listItems={listItems}
      />
      <AddItemForm 
        showModal={showModal} 
        handleHide={handleHide}
        listItems={listItems}
        addNewItem={addNewItem}
        />
      <div 
        className="AddButton btn-danger bg-gradient" onClick={handleButtonClick}>
            +
        </div>
    </div>
  );
}

export default App;
