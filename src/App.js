import React from 'react'
import {Route, BrowserRouter} from 'react-router-dom'
import './App.css';
import Library from './components/Library'
import BookSearch from './components/BookSearch';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
  }

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Route exact path='/' render={() => (
            <Library />
          )} />
          <Route exact path='/search' render={() => (
            <BookSearch />
          )} />
        </BrowserRouter>
      </div>
    )
  }
}

export default BooksApp
