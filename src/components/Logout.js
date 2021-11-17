import React, { useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import axiosWithAuth from '../utils/axiosWithAuth'

const Logout = ()=> {
    const history = useNavigate();

    useEffect(()=> {
        
                localStorage.removeItem('token')
                history('/')
            });
  
    
    return(<div></div>)
}

export default Logout