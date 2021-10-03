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

// router get request to select a specific movie's genre by id
router.get('/details/:id', (req, res) => {
  const queryText = `SELECT "genres"."name", "genre_id" FROM "movies_genres" 
                      JOIN "genres" ON "genres"."id" = "movies_genres"."genre_id"
                      WHERE "movie_id" = $1
                      GROUP BY "genres"."name", "genre_id";`;
  console.log('in get genre');
  pool.query(queryText, [req.params.id])
    .then((result) => {
      console.log('sending back', result.rows); 
      res.send(result.rows); 
    })
    .catch((err) => {
      console.log('Error completing SELECT movies query', err);
      res.sendStatus(500);
    });
});

module.exports = router;