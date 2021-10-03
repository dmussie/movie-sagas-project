const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  const query = 'SELECT * FROM genres ORDER BY "name" ASC';
  pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all genres', err);
      res.sendStatus(500);
    })
});

router.get('/:id', (req, res) => {
  const queryText = 'SELECT * FROM "movies_genres" WHERE id=$1';
  pool.query(queryText, [req.params.id])
    .then((result) => { res.send(result.rows[0]); })
    .catch((err) => {
      console.log('Error completing SELECT movies query', err);
      res.sendStatus(500);
    });
});

module.exports = router;