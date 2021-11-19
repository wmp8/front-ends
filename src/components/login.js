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

const initialState = {
  error: '',
  loading: false
}

export default function Login({ changeLoggedIn }) {
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
      axios.post('https://wampl.herokuapp.com/api/auth/login', formData)
      .then(resp=> {
        console.log('LOGIN', resp.data)
        localStorage.setItem('token', resp.data.token);
        changeLoggedIn(true)
        navigate('/plantobj');
      })
      .catch(err=> {
        console.log(err);
        setState({
          ...state,
          error: `Not a match: ${err.response.data.message}`
        });
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
      <p className='error' id='error'>{state.error}</p>

        </Form>
      </>
    );
  }
  
