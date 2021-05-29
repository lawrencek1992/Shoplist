import React from 'react';
import List from './List';
import AddItemForm from './AddItemForm';
import { Container } from 'react-bootstrap';

const Home = ({ listItems, deleteItem, showModal, handleHide, addNewItem, handleButtonClick }) => {
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