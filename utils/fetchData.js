import { TOKEN_NAME, SERVER_API } from '../credentials'
//const axios = require('axios');
import axios from 'axios';

export const getMethod = async (url) => {
    // let token = localStorage.getItem(TOKEN_NAME)
    // if (token)
    //     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const response = await axios.get(`${SERVER_API + url}`);
    console.log(response)
    // fetch(`${SERVER_API + url}`, {
    //     method: 'GET',
    // })
    // .then(res => res.json())
    // .then(json => {
    //     console.log(json)
    // })
    return response.data;
}

export const postMethod = async (url = '', data = {}) => {
    let token = localStorage.getItem(TOKEN_NAME)
    if (token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const response = await axios.post(`${SERVER_API + url}`, data);
    return response.data;
}

export const deleteMethod = async (url = '', data = {}) => {
    let token = localStorage.getItem(TOKEN_NAME)
    if (token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const response = await axios.delete(`${SERVER_API + url}`, data);
    return response.data;
}