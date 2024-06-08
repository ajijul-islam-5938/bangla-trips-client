import axios from 'axios';
import React from 'react';

const useAxios = () => {
    const axiosSecure = axios.create({
        baseURL : import.meta.env.VITE_SERVER_URL
    })
    axiosSecure.interceptors.request.use((config)=>{
        const token = localStorage.getItem("token")
        config.headers.token = token;
        
        return config;
    })

    const axiosPublic = axios.create({
        baseURL : import.meta.env.VITE_SERVER_URL
    })
return {axiosSecure,axiosPublic}
};

export default useAxios;