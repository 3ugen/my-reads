import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book'
import * as BooksAPI from './BooksAPI';

class SearchBook extends Component {
  state = {
    query: "",
    searchResults: []
  }

  updateQuery = (query) => {
    this.setState({query: query})
    this.updateSearchResults(query)
  }

  updateSearchResults = (q) => {
    if (q) {
      BooksAPI.search(q).then(results => {
        results.error ?
          this.setState({searchResults: []}) :
          this.setState({searchResults: results})
        }
      )
    } else {
      this.setState({ searchResults: []})
    }
  }

  render() {
 console.log(this.state.searchResults);
    return(
      <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search">Close</Link>
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
                  this.state.searchResults.map(result => {
                    let shelf = "none";
                    this.props.books.map(book => (book.id === result.id ? shelf = book.shelf : ""));

                      return (
                        <li key={result.id}>
                          <Book
                            book={result}
                            changeShelf={this.props.changeShelf}
                            books={this.props.books}
                            shelfIs={shelf}
                            />
                        </li>
                      )
                    })
                }
              </ol>
            </div>
          </div>
    );
  }
}

export default SearchBook
