import React, { Component } from 'react'

export class Book extends Component {
  render() {
    const showThumbnail = this.props.book.imageLinks ?
      this.props.book.imageLinks.thumbnail : "";
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${showThumbnail} " ) ` }}></div>
          <div className="book-shelf-changer">
            <select
              onChange={(e) => this.props.changeShelf(
                this.props.book, e.target.value
              )}
              value ={ this.props.shelfIs } >
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </div>
    )
  }
}

export default Book
