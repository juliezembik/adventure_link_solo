const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

//router retreives inventory via ID from database
router.get('/inventory/:id', rejectUnauthenticated, (req, res) => {
    const queryText = `SELECT "items"."item_name", "items"."item_description", "items"."item_img" FROM "items"
                       JOIN "holding_bag" ON "holding_bag"."item_id" = "items"."item_id"
                       JOIN "inventory_bag" ON "inventory_bag"."id" = "holding_bag"."inventory_bag_id"
                       JOIN "person_character" ON "person_character"."person_id" = "inventory_bag"."inventory_id"
                       WHERE "person_character"."character_id" = $1;`;
    pool.query(queryText, [req.params.id])
    .then((result) => {
        res.send(result.rows)
        console.log('Results: ', result.rows);
    }).catch((error) => {
        console.log('Something went wrong in Get items', error);
        res.sendStatus(500);
        
    });
})

module.exports = router;