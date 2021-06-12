import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand">Navbar</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/add-book" className="nav-link">Add Book</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}