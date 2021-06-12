const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  author: {
    type: String,
    required: true,
    trim: true
  },
  isbn: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
  category: {
    type: String,
    trim: true,
    enum: [ 'Science', 'English', 'Literature', 'Others' ],
    required: true
  }
}, {
  collection: 'books'
})

module.exports = mongoose.model('Book', bookSchema)