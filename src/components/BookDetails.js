import React from 'react'
import PropTypes from 'prop-types'
import './BookDetails.css'

function BookDetails(props) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span onClick={() => props.dismiss()} className="close">&times;</span>
        <h3>{props.book.title}</h3>
        <h5>{props.book.subtitle}</h5>
        <h6>By: {props.book.authors}</h6>
        <span>Published: {props.book.publishedDate}</span>
        <p>{props.book.description}</p>
      </div>
    </div>
  )
}

BookDetails.propTypes = {
  book: PropTypes.object.isRequired,
  dismiss: PropTypes.func.isRequired
}

export default BookDetails