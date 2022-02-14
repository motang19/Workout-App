const axios = require('axios').default;


const http = axios.create ({
    baseURL: "http://localhost:8000/api",
    headers: {
        "Content-type": "application/json"
    }
});

export default http
