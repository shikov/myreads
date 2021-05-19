import propTypes from 'prop-types'
import RatingIcon from './RatingIcon'
function Book(props) {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{backgroundImage: `url(${
            props.book.imageLinks? props.book.imageLinks.smallThumbnail:''})`}}
            onClick={() => props.viewBook(props.book)}></div>
          <div className="book-shelf-changer">
            <select onChange={(e) => props.updateBook(props.book, e.target.value)} defaultValue={props.book.shelf}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{props.book.title}</div>
        <div className="book-authors">{props.book.authors}</div>
      </div>
      <div className="box flex">
        {[1, 2, 3, 4, 5].map((index) => {
          return (
            <RatingIcon
              key={index}
              index={index} 
              rating={props.book.averageRating} />
          )
        })}
    </div>
    </li>
  )
}

Book.prototype = {
  book: propTypes.object.isRequired,
  updateBook: propTypes.func.isRequired,
  viewBook: propTypes.func.isRequired
}

export default Book