import React, { useState } from 'react'
import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'
import EditBookModal from './EditBookModal'
import { useDispatch } from 'react-redux'
import { deleteBook } from '../_actions/bookActions'

export default function BookCard({ isbn, title, author, id }) {
  const dispatch = useDispatch()

  const [open, setOpen] = useState(false)
  const onOpenModal = () => setOpen(true)
  const onCloseModal = () => setOpen(false)

  const handleDelete = () => {  
    dispatch(deleteBook(isbn))
  }

  return (
    <>
      <div
        className="border w-100 pt-3 pb-3 mt-4 rounded"
        key={id}>
        <h4>{title}</h4>
        <p className="p-0 mb-2"><strong>ISBN :</strong> {isbn}</p>
        <p className="p-0 mb-2"><strong>Author :</strong> {author}</p>

        
        {/* Edit button with responsive modal */}
        <button type="button"
          className="btn btn-sm btn-outline-secondary mr-2"
          style={{ width: "100px" }}
          onClick={onOpenModal}
        >
          Edit
        </button>
        <Modal open={open} onClose={onCloseModal} center>
          <EditBookModal id={id} onCloseModal={onCloseModal} />
        </Modal>
        
        {/* Delete Button */}
        <button
          type="button"
          className="btn btn-sm btn-danger"
          style={{ width: "100px" }}
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </>
  )
}