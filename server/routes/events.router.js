const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "events"
                       JOIN "event_rewards" ON "event_rewards"."event_id" = "events"."id";`;
    pool.query(queryText)
    .then((result) => {
        res.send(result.rows)
        console.log('get Events result.row: ', result.rows);
    }).catch((error) => {
        console.log('Something went wrong in event get', error);
        res.sendStatus(500);
    });
})

module.exports = router;