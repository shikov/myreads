import propTypes from 'prop-types'
import Book from './Book'
function BookList(props) {
  return (
    <ol className="books-grid">
      {props.books.map(book => <Book key={book.id} book={book}
          updateBook={props.updateBook} />)}
    </ol>
  )
}

BookList.prototype = {
  books: propTypes.array.isRequired,
  updateBook: propTypes.func.isRequired
}

export default BookList