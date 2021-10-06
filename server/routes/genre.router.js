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
  // the queryText will select for a genre name from the genres table
  // we also acknowlege the genre_id column from the movies_genres junction table
  // we then join the genres table to the movies_genres junction table
  // equating the id from the genres table to the genre_id values from the junction table
  // movie_id = $1 enables the id to change, making it possible to target specific movies by id
  // this query enables us to select for a specific movie AND collect all of it's genres
  const queryText = `SELECT "genres"."name", "genre_id" FROM "movies_genres" 
                      JOIN "genres" ON "genres"."id" = "movies_genres"."genre_id"
                      WHERE "movie_id" = $1
                      GROUP BY "genres"."name", "genre_id";`;
  console.log('in get genre');
  // we are pooling the queryText from above and we and take into account its specific
  // id which is signified by req.params.id
  // the query and it's new id is sent to the database
  // as a new entry in the "movies" table 
  // as well as new entry in the "movies_genres" table 
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