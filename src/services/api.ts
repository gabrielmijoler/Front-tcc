import axios from "axios";

const instance = axios.create({
    baseURL: 'http://192.168.56.1:3000',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json'
    },

  });

export default instance;