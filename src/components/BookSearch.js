import React from 'react'
import { Link } from 'react-router-dom'
import { search } from '../BooksAPI'
import propTypes from 'prop-types'
import BookList from './BookList'

class BookSearch extends React.Component {
  static propTypes = {
    lib: propTypes.array.isRequired,
    updateBook: propTypes.func.isRequired,
    viewBook: propTypes.func.isRequired
  }

  state = {
    searchResult: []
  }

  searchTimeout =  0

  delayedSearch = e => {
    if(this.searchTimeout) clearTimeout(this.searchTimeout)
    this.searchTimeout = setTimeout(() => {
      this.searchBooks(e)
    }, 300)
  }

  searchBooks = (e) => {
    if (!e.target.value) {
      this.setState({ searchResult: [] })
      return
    }
    search(e.target.value).then(books => {
      if (books.error) {
        this.setState({ searchResult: [] })
        return
      }
      books = books.map(searchBook => {
        const b = this.props.lib.filter(libBook => searchBook.id === libBook.id)
        if (b.length) {
          searchBook.shelf = b[0].shelf
        }
        else {
          searchBook.shelf = 'none'
        }
        return searchBook
      })
      this.setState({ searchResult: books })
    })
      .catch(err => this.setState({ searchResult: [] }))
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input onChange={this.delayedSearch} type="text" placeholder="Search by title or author" />

          </div>
        </div>
        <div className="search-books-results">
          <BookList books={this.state.searchResult}
          updateBook={this.props.updateBook}
          viewBook={this.props.viewBook} />
        </div>
      </div>
    )
  }
}

export default BookSearch