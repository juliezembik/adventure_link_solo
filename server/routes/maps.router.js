const express = require('express');
const router = express.Router();
const axios = require('axios');
const API_KEY = process.env.API_KEY;

router.get('/', (req, res) => {
    axios({
        method: 'GET', 
        url: `BASE`
    })
});