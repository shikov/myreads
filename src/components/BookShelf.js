import BookList from './BookList'

function BookShelf(props) {
  return(
    <div className="bookshelf">
      <h2 className="bookshelf-title">Currently Reading</h2>
      <div className="bookshelf-books">
        <BookList />
      </div>
    </div>
  )
}

export default BookShelf