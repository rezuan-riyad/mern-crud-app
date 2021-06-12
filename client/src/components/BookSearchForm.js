import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchBook } from '../_actions/bookActions'

export default function BookSearchForm() {
  const [text, setText] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(searchBook(text))
  }

  return (
    <>
      <form className="form-inline my-2 ml-auto mr-auto w-100" onSubmit={handleSubmit}>
        <input
          className="form-control form-control-sm w-75"
          type="search" placeholder="Search"
          aria-label="Search"
          onChange={ (e) => setText(e.target.value) }
        />
        <button
          className="btn btn-sm btn-outline-success w-25"
          type="submit"
        >
          Search
      </button>
      </form>
    </>
  )
}