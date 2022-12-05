import Axios from 'axios';
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function AddNewItem() {
    const [show, setShow] = useState(false);

    const handleClose = () => {
    setShow(false)
    window.location.reload();
    };
    const handleShow = () => setShow(true);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    
    const addNewItem=(e)=>{
      e.preventDefault();
      console.log("function called")
      Axios.post("http://localhost:3001/api/items/AddItem", {     
        "name" : name,
        "description" : description,
        "price" : price,
  }).then((response) =>{
      alert("Addition Successful!")
  });
  // e.preventDefault();
  };
  
  return (
    
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add New Item
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={addNewItem}>
          
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Item Name</Form.Label>
              <Form.Control name="item" type="text" placeholder="item" autoFocus value={name} onChange={(e)=> setName(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Price</Form.Label>
              <Form.Control name="price" type="text" placeholder="Price" value={price} onChange={(e)=> setPrice(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control name="desc" as="textarea" rows={3} value={description} onChange={(e)=> setDescription(e.target.value)} />
            </Form.Group>
            
            <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
            <Button type='submit' name="save" variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          
          </Form>
          
        </Modal.Body>
        
      </Modal>
    </div>
  )
}

export default AddNewItem


