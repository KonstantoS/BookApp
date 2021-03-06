import React, { PropTypes } from 'react'
import { SortDirBlock, SortFieldBlock } from '../components/SortBlocks'
import { connect } from 'react-redux'
import SortedBooks from './SortedBooks'
import fetchBooksData from '../actions/booksActions'
import fetchAuthorsData from '../actions/authorsActions'
import fetchGenresData from '../actions/genresActions'

class BooksListPage extends React.Component{
    constructor(props){
        super(props);
        const { dispatch } = this.props;
        dispatch(fetchBooksData());
        dispatch(fetchGenresData());
        dispatch(fetchAuthorsData());
    }
    /*componentWillMount(){
        const { dispatch } = this.props;
        dispatch(fetchBooksData());
        dispatch(fetchGenresData());
        dispatch(fetchAuthorsData());
    }*/
    render(){
        const {books, authors, genres} = this.props;

        if( books.isFetching ||
            genres.isFetching ||
            authors.isFetching ||
            books.items.length == 0 ||
            genres.items.length == 0 ||
            authors.items.length == 0
        ) {
            return (
                <div className="wait-handler centered container">
                    <h3>Fetching data...</h3>
                </div>
            );
        }
        return(
            <div className="centered container">
                <div className="sorting-blocks">
                    <SortFieldBlock />
                    <SortDirBlock />
                </div>
                <div>
                    <SortedBooks />
                </div>
            </div>
        );
    }
}
export const mapStateToProps = (state) => {
    return{
        books: state.app.books,
        authors: state.app.authors,
        genres: state.app.genres
    }
};
BooksListPage.propTypes = {
    authors: PropTypes.shape({
        isFetching: PropTypes.bool.isRequired,
        items: PropTypes.arrayOf(PropTypes.shape({
            id:PropTypes.number.isRequired,
            name:PropTypes.string.isRequired,
            img:PropTypes.string.isRequired
        })).isRequired
    }).isRequired,
    books:PropTypes.shape({
        isFetching: PropTypes.bool.isRequired,
        items: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            author: PropTypes.number.isRequired,
            desc: PropTypes.string.isRequired,
            genre: PropTypes.number.isRequired
        })).isRequired
    }).isRequired,
    genres:PropTypes.shape({
        isFetching: PropTypes.bool.isRequired,
        items: PropTypes.arrayOf(PropTypes.shape({
            id:PropTypes.number.isRequired,
            title:PropTypes.string.isRequired
        })).isRequired
    }).isRequired,
    dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(BooksListPage);

