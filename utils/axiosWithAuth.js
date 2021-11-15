import axios from 'axios';

const axiosWithAuth = () => {
    console.log('testing merge')
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            authorization: token
        }
    })
}

export default axiosWithAuth;