import React from 'react'
import { connect } from 'react-redux'
import BooksList from '../components/BooksList'

const sortBooks = (books, {field, direction}) => {
    return books.sort((one,another) => {
        if (one[field] > another[field]) {
            return direction === "ASC" ? 1 : -1;
        }
        else if (one[field] < another[field]) {
            return direction === "ASC" ? -1 : 1;
        }
        else {
            return 0;
        }
    });
};
const mapStateToProps = (state) => {
    return {
        items: sortBooks(state.app.books.items, state.app.filtering)
    }
};
const SortedBooks = connect(mapStateToProps)(BooksList);

export default SortedBooks;