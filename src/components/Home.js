import React, {useState } from 'react';
import { useStorageState } from 'react-storage-hooks';
import List from './List';
import AddItemForm from './AddItemForm';
import { Container } from 'react-bootstrap';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [listItems, setListItems] = useStorageState(localStorage, `state-list-items`, []);

  const handleButtonClick = () => {
    setShowModal(true);
  }

  const handleHide = () => {
    setShowModal(false);
  }

  const addNewItem = (item) => {
    const updatedList = listItems.concat(item);
    setListItems(updatedList);
  }

  const deleteItem = (item) => {
    const index = listItems.indexOf(item);
    const updatedList = [...listItems];
    updatedList.splice(index, 1);
    setListItems(updatedList);
  }
    return (
        <Container className="Home" fluid>
                <List 
                  listItems={listItems}
                  deleteItem={deleteItem}
                />
                <AddItemForm 
                  showModal={showModal} 
                  handleHide={handleHide}
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