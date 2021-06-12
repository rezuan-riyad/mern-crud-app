import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api/books",
  headers: {
    'Content-Type': 'application/json'
  }
})

// getBooks is dispatched from <BookList /> component
export const getBooks = async function (dispatch) {
  dispatch({ type: "GET_REQ" })

  axiosInstance.get('/')
    .then(res => {
      dispatch({
        type: "GET_REQ_SUCCESS",
        payload: res.data.books
      })
    })
    .catch(error => {
      console.log(error)
    })
}

// addBook is dispatched from <AddBook /> component
export const addBook = (book) => {
  return async (dispatch) => {
    dispatch({ type: "ADD_BOOK" })
    try {
      const res = await axiosInstance.post('/add-book', { ...book })
      if (res.status === 201 && res.statusText === 'Created') {
        dispatch({
          type: "ADD_BOOK_SUCCESS",
          payload: {
            book: res.data.book,
            message: res.data.msg
          }
        })
      } else if (res.status === 200 && res.statusText === 'OK') {
        dispatch({
          type: "ADD_BOOK",
          payload: {
            message: res.data.msg
          }
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
}

//editBook is dispatched from <EditBookModal /> component
export const editBook = (book) => {
  return async (dispatch) => {
    try {
      const res = await axiosInstance.put('/edit-book', { ...book })
      if (res.status === 200 && res.statusText === 'OK') {
        dispatch({
          type: "EDIT_BOOK",
          payload: { book }
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
}

// deleteBook is dispatched from <BookCard /> component
export const deleteBook = (isbn) => {
  return async (dispatch) => {
    try {
      const res = await axiosInstance.delete('/delete-book',  { data: { isbn } })
      if(res.status === 200){
        dispatch({
          type: "DELETE_BOOK",
          payload: { isbn },
          message: res.data.msg
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
}

//
export const searchBook = (keyword) => {
  return async (dispatch) => {
    try{
      const res = await axiosInstance.get(`/search?keyword=${keyword}`)
      if(res.status === 200){
        dispatch({
          type: "GET_REQ_SUCCESS",
          payload: res.data.books
        })
      }
    }catch(error){
      console.log(error)
    }
  }
}