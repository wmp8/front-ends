// username phone number and password
import React from 'react';
import axios from 'axios';
import { Form, Button, Input, Label, FormGroup } from 'reactstrap';




export default function Signup() {
    
  
    return (
      <>
      <h1>Sign Up</h1>
      <Form>
        <FormGroup>
          <Label for='username'>
            Username
          </Label>
          <Input 
            type='text'
            placeholder='John Doe'
            id='username' />
        </FormGroup>

        <FormGroup>
          <Label for='phonenumber'>
            Phone Number
          </Label>
          <Input 
            type='number'
            placeholder='555-5555'
            id='phonenumber' />
        </FormGroup>

        <FormGroup for='password'>
          <Label>
            Password
          </Label>
          <Input 
            type='password'
            placeholder='6 character minimum'
            id='password' />
        </FormGroup>
      <Button>Submit</Button>

        </Form>
      </>
    );
  }