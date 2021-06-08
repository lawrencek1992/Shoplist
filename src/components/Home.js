import React, {useState } from 'react';
import { Container } from 'react-bootstrap';
import firebase from '../firebase';

import List from './List';
import AddItemForm from './AddItemForm';
import Prompt from './Prompt';


const Home = (user) => {
  const [showAddItemForm, setShowAddItemForm] = useState(false);
  const [listItems, setListItems] = useState([]);

  const handleButtonClick = () => {
    if (firebase.auth().currentUser) {
      setShowAddItemForm(true);
    }
  }

  const handleHideAddItemForm = () => {
    setShowAddItemForm(false);
  }

  const addNewItem = (item) => {
    if (firebase.auth().currentUser) {
      const updatedList = listItems.concat(item);
    setListItems(updatedList);
    }
  }

  const deleteItem = (item) => {
    if (firebase.auth().currentUser) {
      const index = listItems.indexOf(item);
      const updatedList = [...listItems];
      updatedList.splice(index, 1);
      setListItems(updatedList);
    }
  }
    return (
        <Container className="Home" fluid>
        { firebase.auth().currentUser 
          ? (
            <List 
              listItems={listItems}
              deleteItem={deleteItem}
            />
          )
          : (
            <Prompt />
          )
        }
          <AddItemForm 
            showAddItemForm={showAddItemForm} 
            handleHideAddItemForm={handleHideAddItemForm}
            listItems={listItems}
            addNewItem={addNewItem}
          />
          <div 
            className="AddButton btn-danger bg-gradient" 
            onClick={handleButtonClick}
          >
          +
          </div>
        </Container>
    );
}

export default Home;