import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AddItemForm = ({showModal, handleHide, addNewItem}) => {
    const [item, setItem] = useState({});

    const handleForm = () => {
        if (item.name) {
            addNewItem(item);
            handleHide();
        }
    }

    const clearForm = () => {
        setItem({});
    }
    
    return (
        <Modal 
            show={showModal} 
            onHide={() => { 
                clearForm(); 
                handleHide()
            }} 
            centered
        >
            <Modal.Header id="modal">
                <Modal.Title>
                    Add Item
                </Modal.Title>
                <Button 
                    type="close" 
                    className="btn btn-close" id="btn-close" 
                    ariaLabel="Close" 
                    onClick={() => { 
                        clearForm(); 
                        handleHide();
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
                            type="text" className="mb-3" 
                            value={item.name} defaultValue={item.name} 
                            onChange={(event) => {setItem({
                                name: event.target.value,
                                category: item.category
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
                                category: event.target.value
                            })}}
                        >
                            <option>select item</option>
                            <option>produce</option>
                            <option>bakery</option>
                            <option>meat</option>
                            <option>seafood</option>
                            <option>pantry</option>
                            <option>dairy</option>
                            <option>frozen</option>
                            <option>pharmacy</option>
                            <option>household goods</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer id="modal">
                <Button 
                    className="btn btn-success" type="submit" 
                    onClick={() => {
                        clearForm();
                        handleHide(); 
                        handleForm();
                    }}>
                    Submit
                </Button>
                <Button 
                    className="btn btn-secondary" type="cancel" 
                    onSubmit={() => {
                        clearForm();
                        handleHide();
                    }}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddItemForm;