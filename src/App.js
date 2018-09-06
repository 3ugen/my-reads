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

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(data => console.log(data))
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
         <SearchBook /> 
        ) : (
         <ListBooks 
           books={this.state.books}
           changeShelf={this.changeShelf}
         />
        )}
      </div>
    )
  }
}

export default BooksApp
