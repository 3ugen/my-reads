import React, { Component } from 'react';
import Book from './Book'
import * as BooksAPI from './BooksAPI';

class SearchBook extends Component {
  state = {
    query: "",
    searchResult: []
  }

  updateQuery = (query) => {
    this.setState({query: query})
  }

  getBooks = (q) => {
    BooksAPI.search(q).then(books => this.setState({searchResult: books}))
  }

  render() {
    return(
      <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={this.props.closeSearchPage}>Close</a>
              <div className="search-books-input-wrapper">
                <input
                  type="text"
                  placeholder="Search by title or author"
                  value={this.state.query}
                  onChange={ e => this.updateQuery(e.target.value)}
                 />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {
                  this.state.searchResult.map(searchedBook => (
                      <li key={searchedBook.id}>
                        <Book
                          book={searchedBook}
                          />
                      </li>
                    ))
                }
              </ol>
            </div>
          </div>
    );
  }
}

export default SearchBook
