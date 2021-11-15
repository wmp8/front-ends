// username phone number and password
import React from 'react';
import axios from 'axios';
import { Form, Button, Input } from 'reactstrap';




export default function Signup() {
    
  
    return (
      <Form>
      <h1>Sign Up</h1>
      <label>Username:
          <Input 
            type='text'
            placeholder='username'
            id='username' />
      </label>
      <label>Phone Number:
          <Input 
            type='number'
            placeholder='phone-number'
            id='phonenumber' />
      </label>
      <label>Password:
          <Input 
            type='password'
            placeholder='password'
            id='password' />
      </label>
      <Button>Submit</Button>
      </Form>
    );
  }