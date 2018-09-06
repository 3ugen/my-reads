import React from 'react';
import { Route } from 'react-router-dom';
// components
import SearchBook from './SearchBooks';
import ListBooks from './ListBooks';
// API's
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
    // SearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({books: books}))
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(data => console.log(data))
  }

  toggleSearchPage = () => {
    this.state.SearchPage ?
    (this.setState({ SearchPage: false })) :
    (this.setState({ SearchPage: true }))
  }


  render() {
    console.log(this.state);
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
              />
            )}/>
      </div>
    )
  }
}

export default BooksApp
