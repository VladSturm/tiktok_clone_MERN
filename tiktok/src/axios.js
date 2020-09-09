import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tiktok-backend-mern-germany.herokuapp.com/',
})

export default instance;