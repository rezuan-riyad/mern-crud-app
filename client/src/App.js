import React from 'react'
import './App.css'
import { Switch, Route, Router } from 'react-router-dom'
import BookList from './components/BookList'
import Addbook from './components/Addbook.js'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={BookList} />
        <Route path="/add-book" component={Addbook} />
      </Switch>
    </div>
  );
}

export default App;
