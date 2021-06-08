import React, {useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import firebase from '../firebase';

import List from './List';
import AddItemForm from './AddItemForm';
import Prompt from './Prompt';


const Home = (user) => {
  const [showAddItemForm, setShowAddItemForm] = useState(false);
  const [listItems, setListItems] = useState([]);

  const database = firebase.database();

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
      const userID = firebase.auth().currentUser.uid;
      const itemData = {
        name: item.name,
        category: item.category,
      };
      // Create a new child of "items" to hold the item data and set the data of that child. UseEffect updates state. 
      database.ref('users/' + userID + '/items/' + Date.now()).set(itemData);
    }
  }

  const deleteItem = (item) => {
    if (firebase.auth().currentUser) {
      const userID = firebase.auth().currentUser.uid;
      // Use the item key (the date when it was created) to make a reference to the item. Then remove the item from firebase. UseEffect updates state. 
      const itemRef = database.ref('users/' + userID + '/items/' + item.key);
      itemRef.remove();
    }
  }

  useEffect(() => {
    if (firebase.auth().currentUser) {
      const userID = firebase.auth().currentUser.uid;
      const itemsRef = database.ref('users/' + userID + '/items');
      // Fetch a snapshot of what's in the database.
      itemsRef.on("value", (snapshot) => {
        const items = snapshot.val();
        const listItemsState = [];
        for (let item in items) {
          listItemsState.push({
            // Each item retrieved from Firebase is actually the item key (Date.now()), so this value is assigned to "key" in the object.
            key: item,
            name: items[item].name,
            category: items[item].category,
          });
        }
        // Function to sort items
        function sortByCategory(a, b) {
          const itemA = a.category.toLowerCase();
          const itemB = b.category.toLowerCase();

          let comparison = 0;
          if (itemA > itemB) {
            comparison = 1;
          } else if (itemA < itemB) {
            comparison = -1;
          }
          return comparison;
        }
        // Store sorted items in a new variable and use it to update state. 
        const orderedList = listItemsState.sort(sortByCategory);
        setListItems(orderedList);

      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setListItems]);

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