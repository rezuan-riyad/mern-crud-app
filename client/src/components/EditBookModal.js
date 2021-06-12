import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editBook } from '../_actions/bookActions'

export default function EditBookModal({ id, onCloseModal }) {
  const book = useSelector((state) => {
    return state.bookReducer.books.filter(book => {
      return book._id === id
    })
  })

  const dispatch = useDispatch()

  const [title, setTitle] = useState(book[0].title)
  const [author, setAuthor] = useState(book[0].author)
  const [isbn, setIsbn] = useState(book[0].isbn)

  const handleEdit = () => {
    const _book = {
      title, author, isbn, _id: id,
      category: book[0].category
    }
    dispatch(editBook(_book))
  }

  return (
    <>
      <form className="p-3 m-auto form-modal">
        <div className="form-group">
          <label>Book Title: </label>
          <input 
            type="text" 
            className="form-control form-control-sm"
            value={title}
            onChange={ (e) => setTitle(e.target.value)} />
        </div>
        <div class="form-group">
          <label>Book Author</label>
          <input 
          type="text" 
          className="form-control form-control-sm"
          value={author} 
          onChange={ (e) => setAuthor(e.target.value) }/>
        </div>
        <div class="form-group">
          <label>ISBN</label>
          <input 
            type="text" 
            className="form-control form-control-sm"
            value={isbn} 
            onChange={(e) => setIsbn(e.target.value)}/>
        </div>
        <button
          type="button"
          className="btn btn-sm btn-success"
          style={{ width: "100px" }}
          onClick={ () => {
            handleEdit();
            onCloseModal();
          }}
        >
          Confirm
        </button>
      </form>
    </>
  )
}