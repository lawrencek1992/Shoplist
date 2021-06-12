import React, { useState, useRef } from 'react';
import { Modal, Button, Form, Overlay, Tooltip } from 'react-bootstrap';

const AddItemForm = ({showAddItemForm, handleHideAddItemForm, addNewItem}) => {
    const [item, setItem] = useState({});
    const [nameTooltip, setNameTooltip] = useState(false);
    const [categoryTooltip, setCategoryTooltip] = useState(false);

    const nameInput = useRef(null);

    const categorySelect = useRef(null);

    const handleForm = () => {
        if (!item.name) {
            setNameTooltip(true);
            setTimeout(() => {
                setNameTooltip(false);
            }, 3000)
        } else if (!item.category) {
            setCategoryTooltip(true);
            setTimeout(() => {
                setCategoryTooltip(false);
            }, 3000);
        } else if (item.name && item.category) {
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
                <Form onSubmit={() => {
                        handleForm();
                    }}>
                    <Form.Group>
                        <Form.Label>
                            Item
                        </Form.Label>
                        <Form.Control 
                            ref={nameInput}
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
                        <Overlay
                            target={nameInput.current}
                            show={nameTooltip}
                            placement="top"
                        >
                            {(props) => (
                                <Tooltip {...props}>
                                    Name required!
                                </Tooltip>
                            )}
                        </Overlay>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Category
                        </Form.Label>
                        <Form.Control 
                            ref={categorySelect}
                            as="select" 
                            className="mb-3"
                            value={item.category}
                            defaultValue={item.catetory}
                            required
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
                        <Overlay
                            target={categorySelect.current}
                            show={categoryTooltip}
                            placement="top"
                        >
                            {(props) => (
                                <Tooltip {...props}>
                                    Please select a category
                                </Tooltip>
                            )}
                        </Overlay>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer id="modal">
                <Button 
                    className="btn btn-success" 
                    type="submit" 
                    onClick={() => {
                        handleForm();
                    }}>
                    Submit
                </Button>
                <Button 
                    className="btn btn-secondary" 
                    type="cancel" 
                   >
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddItemForm;