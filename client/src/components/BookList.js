import React, { useEffect } from 'react'
import Layout from './Layout'
import { useDispatch, useSelector } from 'react-redux'
import BookCard from './BookCard'
import BookSearchForm from './BookSearchForm'
import { getBooks } from '../_actions/bookActions'
import logo from '../spinner.gif'



export default function BookList() {
  const loading = useSelector((state) => state.bookReducer.loading)
  const books = useSelector((state) => state.bookReducer.books)
  const dispatch = useDispatch()

  useEffect( () => {
    dispatch(getBooks)
  }, [])

  const renderBookList = books.map(book => {
    return (
      <BookCard
        id={book._id}
        isbn={book.isbn}
        title={book.title}
        author={book.author}
      />)
  })

  return (
    <>
      <Layout>
        <BookSearchForm />
          <h3 className="mt-3">Book List</h3>
          {
            loading ? 
            <div className="w-25 m-auto">
              <img src={logo} alt="spinner" className="w-100 h-100"/>
            </div> : renderBookList
          }
      </Layout>
    </>
  )
}