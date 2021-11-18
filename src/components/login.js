// username phone number and password
import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Input, Label, FormGroup } from 'reactstrap';
import './signup.css'
import { useNavigate } from "react-router-dom";

const initialData = {
  username: '',
  password: ''
}

export default function Login({ changeLoggedIn }) {
  const navigate = useNavigate()
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
    const handleSubmit = (e) => {
      console.log('in submit')
      e.preventDefault()
      axios.post('https://wampl.herokuapp.com/api/auth/login', formData)
      .then(resp=> {
        console.log('LOGIN', resp.data.token)
        localStorage.setItem('token', resp.data.token);
        changeLoggedIn(true)
        console.log('data', resp.data.payload)
        navigate('/plantobj');
      })
      .catch(err=> {
        
        console.log(err);
      })
  }

    return (
      <>
      <h1>Login</h1>
      <Form className='container-fluid' onSubmit={handleSubmit}>
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