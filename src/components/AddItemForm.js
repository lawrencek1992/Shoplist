import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AddItemForm = ({showModal, handleHide}) => {

    return (
        <Modal show={showModal} onHide={handleHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>
                    Add Item
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    Here is where you will put the input form!
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button className="btn btn-default" type="submit" onClick={handleHide}>
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