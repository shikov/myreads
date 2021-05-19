import React from 'react'
import {Route, BrowserRouter} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css';
import Library from './components/Library'
import BookSearch from './components/BookSearch'
import BookDetails from './components/BookDetails'

class BooksApp extends React.Component {
  state = {
    lib: [],
    failedToFetch: false,
    bookDetails: {show: false, book: null}
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({lib: books}))
    .catch(() => this.setState({failedToFetch: true}))
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(() => this.componentDidMount())
  }

  viewBook = book => this.setState({bookDetails: {show: true, book: book}})

  dismissBookDetails = () => this.setState({bookDetails: {show: false}})

  render() {
    return (
      <div className="app">
        {this.state.failedToFetch && (<h1>Cannot reach library server</h1>)}
        <BrowserRouter>
          <Route exact path='/' render={() => (
            <Library
              lib={this.state.lib}
              updateBook={this.updateBook}
              viewBook={this.viewBook}
            />
          )} />
          <Route exact path='/search' render={() => (
            <BookSearch
              lib={this.state.lib}
              updateBook={this.updateBook}
              viewBook={this.viewBook}
            />
          )} />
        </BrowserRouter>
        {this.state.bookDetails.show &&
        <BookDetails
          book={this.state.bookDetails.book}
          dismiss={this.dismissBookDetails}
        />}
      </div>
    )
  }
}

export default BooksApp
