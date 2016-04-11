import React, { PropTypes } from 'react'
import { SortDirBlock, SortFieldBlock } from '../components/SortBlocks'
import { connect } from 'react-redux'
import fetchAuthorsData from '../actions/authorsActions'
import SortedAuthors from './SortedAuthors'

class AuthorsListPage extends React.Component{
    componentWillMount(){
        const { dispatch } = this.props;
        dispatch(fetchAuthorsData());
    }
    render(){
        const {authors} = this.props;

        if( authors.isFetching || authors.items.length == 0) {
            return (
                <div className="wait-handler centered container">
                    <h3>Fetching data...</h3>
                </div>
            );
        }
        return(
            <div className="centered container">
                <div className="sorting-blocks">
                    <SortDirBlock />
                </div>
                <div>
                    <SortedAuthors />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        authors: state.app.authors
    }
};
AuthorsListPage.propTypes = {
    authors: PropTypes.shape({
        isFetching: PropTypes.bool.isRequired,
        items: PropTypes.arrayOf(PropTypes.shape({
            id:PropTypes.number.isRequired,
            name:PropTypes.string.isRequired,
            img:PropTypes.string.isRequired
        })).isRequired
    }).isRequired,
    dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(AuthorsListPage);

