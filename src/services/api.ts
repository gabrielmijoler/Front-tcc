import axios from "axios";

const instance = axios.create({
    baseURL: 'http://192.168.100.5:5000',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json'
    },

  });

export default instance;