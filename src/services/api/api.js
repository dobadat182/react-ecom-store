// src/services/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://dummyjson.com/',
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000, // Optional: Set a timeout of 10 seconds
});

// Optional: Add interceptors
api.interceptors.request.use(
    (config) => {
        // Modify request config before sending it
        // For example, add authorization token
        return config;
    },
    (error) => {
        // Handle request error
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        // Modify response before returning it
        return response;
    },
    (error) => {
        // Handle response error
        return Promise.reject(error);
    }
);

export default api;
