const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const authorSchema = new Schema(
  {
    name: String,
    lastName: String,
    nationality: String,
    birthday: Date,
    pictureUrl: String,
  },
  {
    timestamps: true,
  }
);

// const Author = model('Author', authorSchema);
// module.exports = Author;
//or->
module.exports = model('Author', authorSchema);
