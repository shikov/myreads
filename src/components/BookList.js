import propTypes from 'prop-types'
import Book from './Book'
function BookList(props) {
  return (
    <ol className="books-grid">
      {props.books.map(book => <Book key={book.id} book={book} />)}
    </ol>
  )
}

BookList.prototype = {
  books: propTypes.array.isRequired
}

export default BookList