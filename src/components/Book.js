import propTypes from 'prop-types'
function Book(props) {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{backgroundImage: `url(${props.book.imageLinks.smallThumbnail})`}}></div>
          <div className="book-shelf-changer">
            <select defaultValue={props.book.shelf}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{props.book.title}</div>
        <div className="book-authors">{props.book.authors[0]}</div>
      </div>
    </li>
  )
}

Book.prototype = {
  book: propTypes.object.isRequired
}

export default Book