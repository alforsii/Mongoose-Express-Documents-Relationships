const express = require('express');
const router = express.Router();
//0.This is out Schema object
const Book = require('../../models/Book.model');
const Author = require('../../models/Author.model');

//********************************************************* */
//1.Get Form - /books/add page: rendering from views folder
//********************************************************* */
router.get('/add-books', (req, res, next) => {
  res.render('book-views/book-form');
});
//********************************************************* */
//2.Create books and post in the mongoDB
//********************************************************* */
router.post('/books-input', (req, res, next) => {
  Book.create(req.body) //post the data requested in database
    .then(booksFromDB => {
      //now get that back
      res.redirect(`/book-details/${booksFromDB._id}`); //and redirect to /book-details/${booksFromDB._id}
    })
    .catch(err => console.log(err));
});
//********************************************************* */
//3.Get the posted book details
// Populating the Author
// We have a problem now! Every time we click on a book to check the details,
// instead of the author info, we see the _id, because that is what we are storing in our database.
// We should populate the author field on our /book/:id before sending the data to the view.
// Population is the process of automatically replacing the specified paths in the document with document(s) from other collection(s).
// We may populate a single document, multiple documents, plain object, multiple plain objects, or all objects returned from a query.
//********************************************************* */
router.get('/book-details/:bookId', (req, res, next) => {
  const bookId = req.params.bookId;
  if (!/^[0-9a-fA-F]{24}$/.test(bookId)) {
    return res.status(404).render('not-found');
  }
  Book.findOne({ _id: bookId })
    .populate('author') //Specifies paths which should be populated with other documents. Paths are populated after the query executes
    .then(bookFromDB => {
      // console.log('Output for: bookFromDB', bookFromDB);
      if (!bookFromDB) {
        return res.status(404).render('not-found');
      }
      res.render('book-views/book-details', {
        oneBook: bookFromDB,
        title: bookFromDB.title,
      });
    })
    .catch(err => next(err));
});
//********************************************************* */
//4.Find and Show the all the books from database
//********************************************************* */
router.get('/book-list', (req, res) => {
  Book.find()
    .then(booksFromD => {
      res.render('book-views/book-list', {
        title: 'Books List',
        books: booksFromD,
      });
    })
    .catch(err => console.log(err));
});
//********************************************************* */
//5.Submit
//********************************************************* */
//a. submit Edit with params id
router.get('/books/edit/:id', (req, res) => {
  Book.findById({ _id: req.params.id })
    .then(book => {
      console.log('Output for: book', book);
      res.render('book-views/bookEdit', { book });
    })
    .catch(err => console.log(err));
});

//b. submit Edit with query method
router.get('/books/edit', (req, res) => {
  console.log('Output for: req.query', req.query);
  Book.findOne({ _id: req.query.book_id })
    .then(book => {
      console.log('Output for: book', book);
      res.render('book-views/bookEdit', { book });
    })
    .catch(err => console.log(err));
});
//********************************************************* */
//6. update/edit query
//********************************************************* */
//a.
router.post('/books/edit', (req, res, next) => {
  const { title, author, description, rating } = req.body;
  Book.update(
    { _id: req.query.book_id },
    { $set: { title, author, description, rating } }
  )
    .then(book => {
      res.send('update');
    })
    .catch(error => {
      console.log(error);
    });
});
//b. update/edit by id
router.post('/books/edit/:id', (req, res, next) => {
  const { title, author, description, rating } = req.body;
  Book.update(
    { _id: req.params.id },
    { $set: { title, author, description, rating } }
  )
    .then(book => {
      res.redirect('/add-books');
    })
    .catch(error => {
      console.log(error);
    });
});

//********************************************************* */
//7. Add reviews
//********************************************************* */
router.post('/reviews/add', (req, res, next) => {
  const { user, comments } = req.body;
  console.log('Output for: req.body', req.body);
  Book.update(
    {
      _id: req.query.book_id,
    },
    {
      $push: { reviews: { user, comments } },
    }
  )
    .then(book => {
      res.redirect('/add-books');
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
