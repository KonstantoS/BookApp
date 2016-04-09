import React, {PropTypes} from 'react'
import { Link } from 'react-router'


export default class SingleBook extends React.Component{
    render(){
        const {title,img,author,genre,desc} = this.props.item;
        return(
            <div className="single-book">
                <h1>{ title }</h1>
                <img src={img} />
                <div>
                    <p>Author: <Link to={`/authors/${author.id}`}>{author.name}</Link></p>
                    <p>Genre: <Link to={`/genre/${genre.id}`}>{genre.title}</Link></p>
                    <p>Description:<br /></p>
                    <p>{desc}</p>
                </div>
            </div>
        )
    }
}

SingleBook.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        author: PropTypes.shape({
            id:PropTypes.number.isRequired,
            name:PropTypes.string
        }),
        desc: PropTypes.string.isRequired,
        genre: PropTypes.shape({
            id:PropTypes.number.isRequired,
            title:PropTypes.string
        })
    }).isRequired
};