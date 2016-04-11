import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import BooksList from '../components/BooksList'
import { LEFT_JOIN } from '../lib/data'

export const sortBooks = (books, {field, direction}) => {
    let splitted= field.split(".");
    return books.sort((one,another) => {
        if(splitted.length == 2){
            if (one[splitted[0]][splitted[1]] > another[splitted[0]][splitted[1]]) {
                return direction == "ASC" ? 1 : -1;
            }
            else if (one[splitted[0]][splitted[1]] < another[splitted[0]][splitted[1]]) {
                return direction == "ASC" ? -1 : 1;
            }
            else {
                return 0;
            }
        }
        else if(splitted.length == 1){
            if (one[field] > another[field]) {
                return direction == "ASC" ? 1 : -1;
            }
            else if (one[field] < another[field]) {
                return direction == "ASC" ? -1 : 1;
            }
            else {
                return 0;
            }
        }
        else{
            return books;
        }
    });
};
export const mapStateToProps = (state) => {
    const { books, authors, genres} = state.app;
    const authorsToBooksJoin = LEFT_JOIN(books.items,authors.items,"author","id");
    const joinedItems = LEFT_JOIN(authorsToBooksJoin, genres.items,"genre","id");

    const filtering = state.app.filtering.field == "author" ? Object.assign({},state.app.filtering,{field:"author.name"}) : state.app.filtering;

    return {
        items: sortBooks(joinedItems, filtering)
    }
};
const SortedBooks = connect(mapStateToProps)(BooksList);
export default SortedBooks;