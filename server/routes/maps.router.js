const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // pool query here
    res.send([
        {
            lat: 44.978031,
            lng: -93.2656897,
            text:'Prime Digital Academy'
        },
        {
            lat: 44.9789569,
            lng: -93.2667679,
            text: 'Subway'
        },
    ])
});

module.exports = router;