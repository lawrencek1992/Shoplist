import React from 'react';
import Modal from 'react-bootsrap/Modal';
import Button from 'react-bootstrap/Button';

const AddItem = () => {
    return (
        <Modal.Dialog>
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
                <Button className="btn btn-default">
                    Submit
                </Button>
            </Modal.Footer>
        </Modal.Dialog>
    );
}

export default AddItem;