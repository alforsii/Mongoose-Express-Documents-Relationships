const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const booksSchema = new Schema(
  {
    title: String,
    description: String,
    author: [{ type: Schema.Types.ObjectId, ref: 'Author' }],
    rating: Number,
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  }
);

const Book = model('Book', booksSchema);
module.exports = Book;
