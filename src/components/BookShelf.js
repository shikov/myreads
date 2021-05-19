import propTypes from 'prop-types'
import BookList from './BookList'

function BookShelf(props) {
  return(
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
        <BookList
          books={props.books}
        />
      </div>
    </div>
  )
}

BookShelf.prototype = {
  books: propTypes.array.isRequired,
  title: propTypes.string.isRequired
}

export default BookShelf