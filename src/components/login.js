// username phone number and password
import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Input, Label, FormGroup } from 'reactstrap';
import './signup.css'


const initialData = {
  username: '',
  phone: '',
  password: ''
}

export default function Login() {
    const [formData, setFormData] = useState(initialData)

    const handleChange = (e) => {
      const name = e.target.name
      const value = e.target.value
      const newData = {
        ...formData, 
        [name]: value
      }
      setFormData(newData)
    }


    return (
      <>
      <h1>Login</h1>
      <Form className='container-fluid'>
        <FormGroup>
          <Label for='username'>
            Username
          </Label>
          <Input 
            name='username'
            onChange={handleChange}
            value={formData.username}
            type='text'
            placeholder='John Doe'
            id='username' />
        </FormGroup>

        <FormGroup>
          <Label for='phonenumber'>
            Phone Number
          </Label>
          <Input 
            name='phone'
            onChange={handleChange}
            value={formData.phone}
            type='number'
            placeholder='555-5555'
            id='phonenumber' />
        </FormGroup>

        <FormGroup for='password'>
          <Label>
            Password
          </Label>
          <Input 
            name='password'
            onChange={handleChange}
            value={formData.password}
            type='password'
            placeholder='6 character minimum'
            id='password' />
        </FormGroup>
      <Button className='button'>Submit</Button>

        </Form>
      </>
    );
  }