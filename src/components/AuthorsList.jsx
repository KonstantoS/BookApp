import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import AuthorItem from './AuthorItem'

export default class AuthorsList extends React.Component{
    render(){
        return(
            <div className="author-list">
                {this.props.items.map(author =>
                    <AuthorItem key={author.id} item={author}/>
                )}
            </div>
        );
    }
}
AuthorsList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number.isRequired,
        name:PropTypes.string.isRequired,
        img:PropTypes.string.isRequired
    }).isRequired)
};