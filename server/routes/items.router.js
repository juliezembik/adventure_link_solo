const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


router.get('/', rejectUnauthenticated, (req, res) => {
    const queryText = `SELECT * FROM "items";`;
    pool.query(queryText)
    .then((result) => {
        res.send(result.rows)
        console.log('Results: ', result.rows);
        
    }).catch((error) => {
        console.log('Something went wrong in Get items', error);
        res.sendStatus(500);
        
    });
})

module.exports = router;