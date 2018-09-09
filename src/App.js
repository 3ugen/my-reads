import React from 'react';
import { Route } from 'react-router-dom';
// components
import SearchBook from './SearchBooks';
import ListBooks from './ListBooks';
// API's
import * as BooksAPI from './BooksAPI'
// Styles
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({books: books}))
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
    BooksAPI.getAll().then(books => this.setState({books: books}))
  }


  render() {
    return (
      <div className="app">
        <Route exact path="/" render={ () => (
          <ListBooks
            books={this.state.books}
            changeShelf={this.changeShelf}
            openSearchPage={this.toggleSearchPage}
          />
            )}/>
          <Route path="/search" render={({ history }) => (
              <SearchBook
                closeSearchPage={this.toggleSearchPage}
                changeShelf={this.changeShelf}
                books={this.state.books}
              />
            )}/>
      </div>
    )
  }
}

export default BooksApp
