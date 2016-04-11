import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import fetchBooksData from '../actions/booksActions'
import fetchAuthorsData from '../actions/authorsActions'
import fetchGenresData from '../actions/genresActions'
import SingleAuthor from '../components/SingleAuthor'
import { LEFT_JOIN } from '../lib/data'

class AuthorPage extends React.Component{
    constructor(props){
        super(props);
        this.booksByAuthor = this.booksByAuthor.bind(this);
        this.extractAuthor = this.extractAuthor.bind(this);
    }
    componentWillMount(){
        const { dispatch } = this.props;
        dispatch(fetchBooksData());
        dispatch(fetchAuthorsData());
        dispatch(fetchGenresData());
    }
    extractAuthor(){
        const {authors, id} = this.props;
        return Object.assign({},authors.items.filter(author => {
            return author.id == id;
        })[0],{books:this.booksByAuthor()});
    }
    booksByAuthor() {
        const { books,genres,id } = this.props;
        const authorBooks = books.items.filter(book => {
            return book.author == id
        });
        return LEFT_JOIN(authorBooks, genres.items, "genre","id");
    }
    render(){
        const {books, authors, genres} = this.props;
        if( books.isFetching ||
            authors.isFetching ||
            genres.isFetching ||
            books.items.length == 0 ||
            authors.items.length == 0 ||
            genres.items.length == 0
        ) {
            return (
                <div className="wait-handler centered container">
                    <h3>Fetching data...</h3>
                </div>
            );
        }
        return(
            <div className="centered container">
                <SingleAuthor item={this.extractAuthor()}/>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return{
        id: ownProps.params.id,
        books: state.app.books,
        authors: state.app.authors,
        genres: state.app.genres
    }
};

export default connect(mapStateToProps)(AuthorPage);