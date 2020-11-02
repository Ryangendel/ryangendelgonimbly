import React , {useState} from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function SolutionModal(props) {
    const [show, setShow] = useState(true);
  
    const handleClose = () => {
    props.reset()    
    setShow(false);
    }
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Your Results</Modal.Title>
          </Modal.Header>
          <Modal.Body>{props.solution}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
 export default SolutionModal;