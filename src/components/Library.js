import {Link} from 'react-router-dom'
import BookShelf from './BookShelf'

function Library(props) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf />
          <BookShelf />
          <BookShelf />
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

export default Library