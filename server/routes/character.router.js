const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "person_character";`;
    pool.query(queryText)
    .then((result) => {
        res.send(result.rows)
        console.log('Result.rows', result.rows);
    }).catch((error) => {
        console.log('Something went wrong in GET /person character', error);
        res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post('/create', (req, res) => {
    const queryText = `INSERT INTO "person_character" ("character_name", "gender", "race", "person_class", "alignment", "background")
                       VALUES ($1, $2, $3, $4, $5, $6);`;
    pool.query(queryText, [req.body.character_name, req.body.gender, req.body.race, req.body.person_class, req.body.alignment, req.body.background])
    .then(() => {
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log('Something went wrong in POST', error);
        next(error);
    });
});

module.exports = router;