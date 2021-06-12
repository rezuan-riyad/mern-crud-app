import React from 'react'
import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />

      <div className="container mt-2 p-2" style={{ maxWidth: "600px" }}>
        {children}
      </div>
    </>
  )
}