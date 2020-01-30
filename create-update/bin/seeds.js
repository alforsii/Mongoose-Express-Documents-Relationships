const mongoose = require('mongoose');
const Book = require('../models/Book.model');
const Author = require('../models/Author.model');
require('../config/db.config');
//
Book.collection.drop();
Author.collection.drop();

const books = [
  {
    title: 'The Hunger Games',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: {
      name: 'Suzanne',
      lastName: 'Collins',
      nationality: 'American',
      birthday: new Date(1962, 07, 11),
      pictureUrl:
        'https://www.thefamouspeople.com/profiles/images/suzanne-collins-3.jpg',
    },
    rating: 10,
  },
  {
    title: 'Harry Potter',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: {
      name: 'Joanne',
      lastName: 'Rowling',
      nationality: 'English',
      birthday: new Date(1965, 06, 31),
      pictureUrl:
        'https://www.biography.com/.image/t_share/MTE4MDAzNDE3OTI3MDI2MTkw/jk-rowling_editedjpg.jpg',
    },
    rating: 9,
  },
  {
    title: 'To Kill a Mockingbird',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: {
      name: 'Harper',
      lastName: 'Lee',
      nationality: 'American',
      birthday: new Date(1926, 03, 28),
      pictureUrl:
        'https://cdn.cnn.com/cnnnext/dam/assets/150710115858-harper-lee-c1-exlarge-169.jpg',
    },
    rating: 8,
  },
  {
    title: 'Pride and Prejudice',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: {
      name: 'Jane',
      lastName: 'Austen',
      nationality: 'English',
      birthday: new Date(1817, 11, 16),
      pictureUrl:
        'https://www.biography.com/.image/t_share/MTE1ODA0OTcxNTQ2ODcxMzA5/jane-austen-9192819-1-402.jpg',
    },
    rating: 9,
  },
  {
    title: 'Twilight',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: {
      name: 'Sthephenie',
      lastName: 'Meyer',
      nationality: 'American',
      birthday: new Date(1973, 11, 24),
      pictureUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Stephenie_Meyer_by_Gage_Skidmore.jpg/1200px-Stephenie_Meyer_by_Gage_Skidmore.jpg',
    },
    rating: 10,
  },
  {
    title: 'The Book Thief',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: {
      name: 'Markus',
      lastName: 'Zusak',
      nationality: 'Australian',
      birthday: new Date(1975, 05, 23),
      pictureUrl: 'https://images.penguinrandomhouse.com/author/59222',
    },
    rating: 7,
  },
  {
    title: 'The Chronicles of Narnia',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: {
      name: 'Suzanne',
      lastName: 'Lewis',
      nationality: 'British',
      birthday: new Date(1898, 10, 29),
      pictureUrl:
        'https://media1.britannica.com/eb-media/24/82724-004-C01DBECB.jpg',
    },
    rating: 8,
  },
  {
    title: 'Animal Farm',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: {
      name: 'George',
      lastName: 'Orwell',
      nationality: 'Indian',
      birthday: new Date(1903, 05, 25),
      pictureUrl:
        'https://www.biography.com/.image/t_share/MTIwNjA4NjMzOTMzNjI4OTQw/george-orwell-9429833-1-4022.jpg',
    },
    rating: 9,
  },
  {
    title: 'Gone with the Wind ',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: {
      name: 'Margaret',
      lastName: 'Mitchell',
      nationality: 'American',
      birthday: new Date(1900, 10, 08),
      pictureUrl:
        'https://media1.britannica.com/eb-media/13/153113-004-8474546E.jpg',
    },
    rating: 10,
  },
  {
    title: 'The Fault in Our Stars ',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: {
      name: 'John',
      lastName: 'Green',
      nationality: 'American',
      birthday: new Date(1977, 07, 24),
      pictureUrl:
        'https://i.guim.co.uk/img/media/8a5dc5e279a570fdba282c88d4a2a363a38bc2e4/0_96_4768_2860/master/4768.jpg?w=300&q=55&auto=format&usm=12&fit=max&s=33c90ed86c41e7d9e2a4297936a2e504',
    },
    rating: 8,
  },
];

//1.Create authors
const createAuthors = books.map(book => {
  const newAuthor = new Author(book.author);
  return newAuthor
    .save()
    .then(author => {
      // console.log('Output for: author', author);
      return author.name;
    })
    .catch(error => {
      throw new Error(`Impossible to add the author. ${error}`);
    });
});
// when we created authors above, we get for every author- example:
// Output for each author in createAuthors:
// {
//   _id: 5e3272773b0532166d5a38e0,
//   name: 'Suzanne',
//   lastName: 'Lewis',
//   nationality: 'British',
//   birthday: 1898-11-29T05:00:00.000Z,
//   pictureUrl: 'https://media1.britannica.com/eb-media/24/82724-004-C01DBECB.jpg',
//   createdAt: 2020-01-30T06:06:47.438Z,
//   updatedAt: 2020-01-30T06:06:47.438Z,
//   __v: 0
// }

//2.From created authors make Author modeel
let updatedBooks = Promise.all(createAuthors)
  .then(authors => {
    return books.map(book => {
      return Author.findOne({
        name: book.author.name,
        lastName: book.author.lastName,
      }).then(author => {
        if (!author) {
          throw new Error(
            `unknown author ${book.author.name} ${book.author.lastName}`
          );
        }
        //so we're reassigning every author(object) property in the Book to the above created authors id,
        // meaning, now every author in the Book will be referencing to the same author created in the Author model
        // console.log('book: ', book);//.. check before and
        const updateTheBook = Object.assign({}, book, { author: author._id });
        // console.log('updateTheBook: ', updateTheBook); // ........ and after to see the difference
        // now author object have it Id from Author model
        return updateTheBook;
      });
    });
  })
  .catch(error => {
    throw new Error(error);
  });
// updateTheBook output for each:
//  {
//   title: 'The Hunger Games',
//   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//   author: 5e3272773b0532166d5a38da,
//   rating: 10
// }

//3.Create a new books from updatedBooks above, which will have author id's
const saveBooks = updatedBooks
  .then(updatedBooks => {
    return Promise.all(updatedBooks).then(books => {
      // console.log('books: ', books);
      //this are those updatedBook object from each book above,
      //but all in one array because Promise.All wait for every book and return all in one array
      //now we can loop through this books array and create newBook and save this updated book with author id's referencing to Author model
      //whith refenced author it's easy to update the author in one place instead of updating in every book that is created by the same author for example.
      //so if for example one author has millions of books, this all books now will have the same author id,
      //which referencing to a single author in the Author model which we have created.
      return books.map(book => {
        const newBook = new Book(book);
        return newBook.save();
        //here we're saving every newBook to mongoDB or dataBase
      });
    });
  })
  .then(savedBooks => {
    Promise.all(savedBooks)
      .then(
        // books => console.log('books: ', books)
        books.forEach(book => console.log(`created ${book.title}`))
      )
      .then(() => mongoose.connection.close())
      .catch(error => console.log('Error while saving the book: ', error));
  });

//Now every saved book in the mongoDB looks like, example:
// {
//   author: [ 5e3281c336906026e6f075a1 ], //this is the reference id to Author model, where all info about this author is saved or located.
//   _id: 5e3281c336906026e6f075ab,
//   title: 'Gone with the Wind ',
//   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//   rating: 10,
//   createdAt: 2020-01-30T07:12:03.815Z,
//   updatedAt: 2020-01-30T07:12:03.815Z,
//   __v: 0
// }
