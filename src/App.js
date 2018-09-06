import React from 'react'
// components
import SearchBook from './SearchBooks';
import ListBooks from './ListBooks'
// API's
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({books: books}))
  }

  render() {
    console.log(this.state.books);
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
