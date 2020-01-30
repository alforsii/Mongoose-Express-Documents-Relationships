const express = require('express');
const router = express.Router();
const Author = require('../../models/Author.model');

//********************************************************* */
//1.Get Form - /author/add page: rendering from views folder
//********************************************************* */
router.get('/authors/add', (req, res, next) => {
  res.render('add-author-form');
});

router.post('/authors/add', (req, res, next) => {
  const { name, lastName, nationality, birthday, pictureUrl } = req.body;
  const newAuthor = new Author({
    name,
    lastName,
    nationality,
    birthday,
    pictureUrl,
  });
  newAuthor
    .save()
    .then(book => {
      res.redirect('/add-books');
    })
    .catch(error => {
      console.log(error);
    });
});
