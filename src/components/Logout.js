import React, { useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import axiosWithAuth from '../utils/axiosWithAuth'

const Logout = ({changeLoggedIn})=> {
    const history = useNavigate();

    useEffect(()=> {
                changeLoggedIn(false)
                localStorage.removeItem('token')
                history('/')
            });
  
    
    return(<div></div>)
}

export default Logout