import React from 'react'
import {Route, BrowserRouter} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css';
import Library from './components/Library'
import BookSearch from './components/BookSearch'

class BooksApp extends React.Component {
  state = {
    lib: [],
    failedToFetch: false,
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({lib: books}))
    .catch(() => this.setState({failedToFetch: true}))
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(() => this.componentDidMount())
  }

  render() {
    return (
      <div className="app">
        {this.state.failedToFetch && (<h1>Cannot reach library server</h1>)}
        <BrowserRouter>
          <Route exact path='/' render={() => (
            <Library
              lib={this.state.lib}
              updateBook={this.updateBook}
            />
          )} />
          <Route exact path='/search' render={() => (
            <BookSearch
              lib={this.state.lib}
              updateBook={this.updateBook}
            />
          )} />
        </BrowserRouter>
      </div>
    )
  }
}

export default BooksApp
