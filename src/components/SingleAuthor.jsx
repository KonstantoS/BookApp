import React, {PropTypes} from 'react'
import { Link } from 'react-router'
import BooksList from './BooksList'

export default class SingleAuthor extends React.Component{
    render(){
        const {name,img,bio,books} = this.props.item;
        return(
            <div className="single-author">
                <h1>{ name }</h1>
                <img src={img} />
                <div>
                    <p>Biography:<br /></p>
                    <p>{bio}</p>
                </div>
                <div>
                    <h2>Books written:</h2>
                    <BooksList items={books}/>
                </div>
            </div>
        )
    }
}

SingleAuthor.propTypes = {
    item: PropTypes.shape({
        id:PropTypes.number,
        name:PropTypes.string.isRequired,
        img:PropTypes.string.isRequired,
        bio:PropTypes.string.isRequired,
        books:PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            genre: PropTypes.shape({
                id:PropTypes.number.isRequired,
                title:PropTypes.string
            })
        }))
    }).isRequired
};