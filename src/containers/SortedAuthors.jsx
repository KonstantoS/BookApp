import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import AuthorsList from '../components/AuthorsList'
import { LEFT_JOIN } from '../lib/data'

const sortAuthors = (authors, {field, direction}) => {
    return authors.sort((one,another) => {
        if (one[field] > another[field]) {
            return direction == "ASC" ? 1 : -1;
        }
        else if (one[field] < another[field]) {
            return direction == "ASC" ? -1 : 1;
        }
        else {
            return 0;
        }
    });
};
const mapStateToProps = (state) => {
    return {
        items: sortAuthors(state.app.authors.items.slice(), {field:"name", direction:state.app.filtering.direction})
    }
};
const SortedAuthors = connect(mapStateToProps)(AuthorsList);
export default SortedAuthors;