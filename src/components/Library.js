import {Link} from 'react-router-dom'
import propTypes from 'prop-types'
import BookShelf from './BookShelf'

function Library(props) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf
            books={props.lib.filter(book => book.shelf === 'currentlyReading')}
            title='Currently Reading'
            updateBook={props.updateBook}
          />
          <BookShelf
            books={props.lib.filter(book => book.shelf === 'wantToRead')}
            title='Want to Read'
            updateBook={props.updateBook}
          />
          <BookShelf
            books={props.lib.filter(book => book.shelf === 'read')}
            title='Read'
            updateBook={props.updateBook}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to='/search'>
          <button>Add a book</button>
        </Link>
      </div>
    </div>
  )
}

Library.prototype = {
  lib: propTypes.array.isRequired,
  updateBook: propTypes.func.isRequired
}

export default Library