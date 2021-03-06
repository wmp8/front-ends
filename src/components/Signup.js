// username phone number and password
import React, { useState } from 'react';
import { Form, Button, Input, Label, FormGroup } from 'reactstrap';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './signup.css'


const initialData = {
  username: '',
  phone: '',
  password: ''
}

const initialState = {
  error: '',
  loading: false
}

export default function Signup() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState(initialData)
    const [state, setState] = useState(initialState)


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
      axios.post('https://wampl.herokuapp.com/api/auth/signup', formData)
      .then(resp=> {
        localStorage.setItem('token', resp.data.payload);
        console.log('data', resp.data.payload)
        navigate('/plantobj');
      })
      .catch(err=> {
        console.log(err);
        setState({
          ...state,
          error: `!ERROR: ${err.response.data.message}`
        });
      })
  }

    return (
      <>
      <h1>Sign Up</h1>
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
      <Button className='button' onClick={handleSubmit}>Submit</Button>
      <p className='error' id='error'>{state.error}</p>
        </Form>
      </>
    );
  }
  
