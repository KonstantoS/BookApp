import React, { PropTypes } from 'react'
import BookItem from './BookItem'

export default class BookList extends React.Component{
    render(){
        return(
            <div className="book-list">
                {this.props.items.map(book =>
                    <BookItem key={book.id}  item={book} />)
                }
            </div>
        )
    }
}

BookList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        author: PropTypes.shape({
            id:PropTypes.number.isRequired,
            name:PropTypes.string.isRequired
        }),
        desc: PropTypes.string,
        genre: PropTypes.shape({
            id:PropTypes.number.isRequired,
            title:PropTypes.string.isRequired
        }).isRequired
    }).isRequired)
};