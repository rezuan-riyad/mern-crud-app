const initialState = {
  loading: false,
  books: [{
    id: 1,
    title: "",
    isbn: "",
    category: "",
    author: ""
  }],
  error: "",
  message: ""
}

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_REQ":
      return {
        ...state,
        loading: true,
        message: ""
      }
    case "GET_REQ_SUCCESS":
      return {
        ...state,
        loading: false,
        books: action.payload,
        error: ""
      }
    case "GET_REQ_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case "ADD_BOOK":
      return {
        ...state,
        message: ""
      }
    case "ADD_BOOK_SUCCESS":
      return {
        ...state,
        books: [...state.books, action.payload.book],
        message: action.payload.message
      }
    case "EDIT_BOOK":
      return {
        ...state,
        books: state.books.map( book => {
          if(book._id === action.payload.book._id ){
            return action.payload.book
          } else {
            return book
          }
        })
      }
    case "DELETE_BOOK":
      return {
        ...state,
        books: state.books.filter( book => book.isbn !== action.payload.isbn),
        message: action.payload.message
      }
    default:
      return state
  }
}

// {
// },
// {
//   id: 2,
//   title: "Dune",
//   isbn: "978-0684801520",
//   category: "Science Fiction",
//   author: "Frank Herbert"
// }