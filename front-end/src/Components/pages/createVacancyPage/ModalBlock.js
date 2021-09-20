import { Button, Modal } from 'react-bootstrap';
import React, { useState } from 'react';

export default function ModalBlock() {
    const [showWarning, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="d-grid gap-2" >
                <Button style={{ width: 'auto' }} variant="outline-dark" onClick={handleShow}> Add vacancy </Button>
                <Modal show={showWarning} onHide={handleClose} >
                    <Modal.Header closeButton>
                        <Modal.Title>Warning</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure you want to add vacancy?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button type="submit" variant="primary" onClick={handleClose}>
                            Submit
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

        </>
    );
}
