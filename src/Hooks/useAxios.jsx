import axios from 'axios';
import React from 'react';

const useAxios = () => {
    const axiosSecure = axios.create({
        baseURL : "http://localhost:3000"
    })
    
    const axiosPublic = axios.create({
        baseURL : "http://localhost:3000"
    })
return {axiosSecure,axiosPublic}
};

export default useAxios;