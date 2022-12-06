import Axios from 'axios';
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function EditNewItem() {
  const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [status, setStatus] = useState("");
    
    const editItem=(e)=>{
      e.preventDefault();
      const form = e.currentTarget;
      if(form.checkValidity() === false){
        e.preventDefault();
        e.stopPropagation();
      }
      setValidated(true);
      console.log("function called")
      Axios.post("http://3.144.156.111/api/items/UpdateItem", { 
        "_id" : id,     
        "name" : name,
        "description" : description,
        "price" : price,
        "userId" : JSON.parse(sessionStorage.getItem('userId')),
  }).then((response) =>{
      alert("Updated Successfully!")
  });
  // e.preventDefault();
  };
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Edit Item
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={editItem}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Item Name</Form.Label>
              <Form.Control type="text" placeholder="item" autoFocus value={name} onChange={(e)=> setName(e.target.value)}/>
              <Form.Control.Feedback type="invalid">Please enter item name.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" placeholder="Price" value={price} onChange={(e)=> setPrice(e.target.value)}/>
              <Form.Control.Feedback type="invalid">Please enter price.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} value={description} onChange={(e)=> setDescription(e.target.value)} />
              <Form.Control.Feedback type="invalid">Please enter description.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Status</Form.Label>
              <Form.Control type="text" placeholder="Price" value={status} onChange={(e)=> setStatus(e.target.value)}/>
              <Form.Control.Feedback type="invalid">Please enter item status.</Form.Control.Feedback>
            </Form.Group>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type='submit' variant="primary">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
        
      </Modal>
    </div>
  )
}

export default EditNewItem