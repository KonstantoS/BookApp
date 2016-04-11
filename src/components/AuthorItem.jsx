import React, { PropTypes } from 'react'
import { Link } from 'react-router'

export default class AuthorItem extends React.Component{
    render(){
        const {id,name,img} = this.props.item;
        return(
            <div className="author-item">
                <Link to={`/authors/${id}`}><div style={{backgroundImage:`url(${img})`}}></div></Link>
                <h2><Link to={`/authors/${id}`}>{name}</Link></h2>
            </div>
        )
    }
}
AuthorItem.propTypes = {
    item: PropTypes.shape({
        id:PropTypes.number.isRequired,
        name:PropTypes.string.isRequired,
        img:PropTypes.string.isRequired
    }).isRequired
};