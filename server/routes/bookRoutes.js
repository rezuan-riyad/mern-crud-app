const express = require('express')
const router = express.Router()
const { getBooks, addBook, deleteBook, editBook, searchBook } = require('../controllers/bookController')

router.get('/', getBooks)

router.post('/add-book', addBook)

router.put('/edit-book', editBook)

router.delete('/delete-book', deleteBook)

// search book route
router.get('/search', searchBook)

module.exports = router