import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AddItemForm = ({showAddItemForm, handleHideAddItemForm, addNewItem}) => {
    const [item, setItem] = useState({});

    const handleForm = () => {
        if (item.name) {
            addNewItem(item);
            handleHideAddItemForm();
        }
    }

    const clearForm = () => {
        setItem({});
    }
    
    return (
        <Modal 
            show={showAddItemForm} 
            onHide={() => { 
                clearForm(); 
                handleHideAddItemForm();
            }} 
            centered
        >
            <Modal.Header id="modal">
                <Modal.Title>
                    Add Item
                </Modal.Title>
                <Button 
                    type="close" 
                    className="btn btn-close" 
                    id="btn-close" 
                    ariaLabel="Close" 
                    onClick={() => { 
                        clearForm(); 
                        handleHideAddItemForm();
                    }} 
                />
            </Modal.Header>
            <Modal.Body id="modal">
                <Form>
                    <Form.Group>
                        <Form.Label>
                            Item
                        </Form.Label>
                        <Form.Control 
                            type="text" 
                            className="mb-3" 
                            value={item.name} 
                            defaultValue={item.name} 
                            onChange={(event) => {setItem({
                                name: event.target.value,
                                category: item.category,
                                key: Date.now(),
                            })}}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Category
                        </Form.Label>
                        <Form.Control 
                            as="select" className="mb-3"
                            value={item.category}
                            defaultValue={item.catetory}
                            onChange={(event) => {setItem({
                                name: item.name,
                                category: event.target.value,
                                key: Date.now(),
                            })}}
                        >
                            <option>select item</option>
                            <option>bakery</option>
                            <option>dairy</option>
                            <option>deli</option>
                            <option>frozen</option>
                            <option>household</option>
                            <option>meat</option>
                            <option>pantry</option>
                            <option>pharmacy</option>
                            <option>produce</option>
                            <option>seafood</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer id="modal">
                <Button 
                    className="btn btn-success" 
                    type="submit" 
                    onClick={() => {
                        clearForm();
                        handleHideAddItemForm(); 
                        handleForm();
                    }}>
                    Submit
                </Button>
                <Button 
                    className="btn btn-secondary" 
                    type="cancel" 
                    onClick={() => {
                        clearForm();
                        handleHideAddItemForm();
                    }}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddItemForm;