import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    console.log('TOKEN', token)

    return axios.create({
        headers: {
            authorization: token
        },
        baseURL: 'https://wampl.herokuapp.com/api'
    })
}

export default axiosWithAuth;
