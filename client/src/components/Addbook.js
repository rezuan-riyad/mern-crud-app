import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from './Layout'
import { addBook } from '../_actions/bookActions'

export default function Addbook() {

  const [title, setTitle] = useState("")
  const [isbn, setIsbn] = useState("")
  const [author, setAuthor] = useState("")
  const [category, setCategory] = useState("")
  const [btnDisability, setBtndisability] = useState(true)
  const [showAlert, setShowalert] = useState(false)

  const message = useSelector( state => state.bookReducer.message )
  const dispatch = useDispatch()

  useEffect(() => {
    if (title && isbn && author && category) {
      setBtndisability(false)
    } else {
      setBtndisability(true)
    }
  }, [title, isbn, author, category])

  const handleAddBook = () => {
    const book = { title, author, isbn, category }
    dispatch(addBook(book))
    //after saving book
    setTitle("")
    setIsbn("")
    setAuthor("")
    setCategory("")
    setShowalert(true)
    setTimeout( () => {
      setShowalert(false)
    }, 4000)
  }

  return (
    <Layout>
      <span className="position-relative">
        {
          message && showAlert ?
          <p 
          className="position-absolute bg-success text-white shadow m-auto pt-2 pb-2 pl-4 pr-4"
          >{message}</p> : null
        }
      </span>
      <h3>Add New Book</h3>
      <form className="p-3 m-auto form-modal">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={title}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div class="form-group">
          <input
            type="text"
            className="form-control"
            value={author}
            placeholder="Author"
            onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <div class="form-group">
          <input
            type="text"
            className="form-control"
            value={isbn}
            placeholder="ISBN"
            onChange={(e) => setIsbn(e.target.value)} />
        </div>
        <div className="form-group">
          <select className="form-control"
            value={category}
            onChange={(e) => setCategory(e.target.value)}>
            <option value="" >-- Select Category --</option>
            <option value="English">English</option>
            <option value="Science">Science</option>
            <option value="Literature">Literatue</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <button
          type="button"
          className="btn btn-success"
          style={{ width: "100px" }}
          onClick={handleAddBook}
          disabled={btnDisability}
        >
          Add
        </button>
      </form>
    </Layout>
  )
}