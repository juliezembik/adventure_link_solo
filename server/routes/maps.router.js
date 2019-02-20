const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
    const queryText = `SELECT "items"."lat", "items"."lng" FROM "items"
                       WHERE "items" IS NOT NULL;`;
    pool.query(queryText)
    .then((result) => {
        res.send(result.rows);
        console.log('Lat and Lng in Maps: ', result.rows);
    }).catch((error) => {
        console.log('Something went wrong in Get Lat/Lng', error);
        res.sendStatus(500);
    });
});

module.exports = router;