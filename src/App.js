import React from 'react'
import SearchBook from './SearchBooks';
import ListBooks from './ListBooks'
// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
         <SearchBook /> 
        ) : (
         <ListBooks />
        )}
      </div>
    )
  }
}

export default BooksApp
