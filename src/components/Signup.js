// username phone number and password
import React from 'react';
import axios from 'axios';




export default function Signup() {
    
  
    return (
      <>
      <form>
      <h1>Sign Up</h1>
      <label>Username:
          <input 
            type='text'
            placeholder='username'
            id='username' />
      </label>
      </form>
      </>
    );
  }