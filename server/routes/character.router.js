const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    if (req.isAuthenticated()) {
        const queryText = `SELECT * FROM "person_character";`;
        pool.query(queryText)
            .then((result) => {
                res.send(result.rows)
                console.log('Result.rows', result.rows);
            }).catch((error) => {
                console.log('Something went wrong in GET /person character', error);
                res.sendStatus(500);
            });
    }
});

router.get('/:id', (req, res) => {
    if (req.isAuthenticated()) {
        console.log('req.body', req.body);
        const queryText = `SELECT "person_character"."character_name", "person_character"."gender", "person_character"."alignment", "person_character"."race", "person_character"."person_class", "person_character"."background"
                           FROM "person_character"
                           JOIN "person"
                           ON "person_character"."character_id" = "person"."id"
                           WHERE "person"."id" = $1;`;
        pool.query(queryText, [req.params.id])
            .then((result) => {
                res.send(result.rows)
                console.log('Result.rows', result.rows);
            }).catch((error) => {
                console.log('Something went wrong in GET /person character', error);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }
});


/**
 * POST route template
 */
router.post('/create', (req, res) => {
    const queryText = `INSERT INTO "person_character" ("character_id", "character_name", "gender", "race", "person_class", "alignment", "background")
                       VALUES ($1, $2, $3, $4, $5, $6, $7);`;
    pool.query(queryText, [req.body.character_id, req.body.character_name, req.body.gender, req.body.race, req.body.person_class, req.body.alignment, req.body.background])
        .then(() => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('Something went wrong in POST', error);
            // next(error);
        });
});

module.exports = router;