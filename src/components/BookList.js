import Book from './Book'
function BookList(props) {
  return (
    <ol className="books-grid">
      <Book />
      <Book />
    </ol>
  )
}

export default BookList