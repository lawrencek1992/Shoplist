import React from 'react';
import { Modal, Button } from 'react-bootstrap';

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
                <p>
                    Here is where you will put the input form!
                </p>
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