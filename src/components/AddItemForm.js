import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AddItemForm = ({showModal, handleHide}) => {

    return (
        <Modal show={showModal} onHide={handleHide} centered>
            <Modal.Header id="modal">
                <Modal.Title>
                    Add Item
                </Modal.Title>
                <Button type="close" className="btn btn-close" id="btn-close" ariaLabel="Close" onClick={handleHide} />
            </Modal.Header>
            <Modal.Body id="modal">
                <Form>
                    <Form.Group>
                        <Form.Label>
                            Item
                        </Form.Label>
                        <Form.Control type="text" className="mb-3" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Category
                        </Form.Label>
                        <Form.Control as="select" className="mb-3">
                            <option>none</option>
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
                <Button className="btn btn-success" type="submit" onClick={handleHide}>
                    Submit
                </Button>
                <Button className="btn btn-secondary" type="cancel" onClick={handleHide}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddItemForm;