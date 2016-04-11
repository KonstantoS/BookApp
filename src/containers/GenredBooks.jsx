import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import BooksList from '../components/BooksList'
import { LEFT_JOIN } from '../lib/data'
import {sortBooks, mapStateToProps} from './SortedBooks'

const mapStateToPropsExtended = (state, ownProps) => {
    return {
       items:mapStateToProps(state).items.filter(item => item.genre.id == ownProps.genreID)
    };
};
const GenredBooks = connect(mapStateToPropsExtended)(BooksList);
export default GenredBooks;