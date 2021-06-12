const Book = require('../models/bookModel')


// @desc get all books
// @route GET /api/books/
// @access Public
exports.getBooks = function (req, res) {
  Book.find().exec((err, books) => {
    if (err) {
      return res.status(400).json({ error })
    } else if (books) {
      return res.status(200).json({ books })
    } else {
      return res.status(200).json({
        msg: "No books to show."
      })
    }
  })
}

// @desc add a new book
// @route POST /api/books/add-book
// @access Public 
exports.addBook = async function (req, res) {
  const { title, author, isbn, category } = req.body
  if (!title || !author || !isbn || !category) {
    return res.status(400).json({ msg: "All fields are required." })
  }

  try {
    const book = await Book.findOne({ isbn })
    if (book) return res.status(200).json({ msg: "Book Exists." })

    const newBook = await Book.create({ title, author, isbn, category })
    if (newBook) {
      return res.status(201).json({ msg: "Book Saved.", book: newBook })
    }
  } catch (error) {
    return res.status(400).json({ error })
  }
}

// @desc delete existing book
// @route DELETE /api/books/delete-book
// @access Public 
exports.deleteBook = function (req, res) {
  const isbn = req.body.isbn
  if (!isbn) {
    return res.status(400).json({ msg: "Provide ISBN." })
  }
  Book.findOneAndDelete({ isbn })
    .exec((error, book) => {
      if (error) {
        return res.status(400).json({ error })
      } else if (book) {
        return res.status(200).json({ msg: "Deleted Successfully." })
      } else {
        return res.status(204).json()
      }
    })
}

// @desc update a book
// @route UPDATE /api/books/edit-book
// @access Public
exports.editBook = async function (req, res) {
  const { title, isbn, author, category, _id } = req.body
  if (!_id) {
    return res.status(400).json({ msg: "Provide ID." })
  }
  const query = { _id }
  
  let update
  if(!category){
    update = {
      $set: { title, author, isbn }
    }
  } else if( title && isbn && author && category){
    update = {
      $set: { title, author, category, isbn }
    }
  }else if( !title || !author || !isbn ) {
    return res.status(400).json({ msg: "Data should be provided at correct format."})
  }

  Book.findOneAndUpdate( query, update, { new: true, runValidators: true })
    .exec((error, editedBook) => {
      if (error) return res.status(400).json({ error: error.message })
      else if (editedBook) return res.status(200).json({ editedBook })
      return res.status(200).json({ msg: "Book doesn't exist." })
    })
}

// @desc search book 
// @route GET /api/books/search
// access Public
exports.searchBook = async function(req, res) {
  const keyword = req.query.keyword
  const regex = { "$regex": new RegExp( keyword.toLowerCase(),  'i')}
  const query = { $or: [ { title: regex }, { author: regex } ] } 
  Book.find( query , function(err, data){
    if(err) return res.status(400).json({ error })
    else if(data) return res.status(200).json({ books: data })
    else{
      return res.status(404).json({ msg: "No match found" })
    }
  })
}