import React, {PropTypes} from 'react'
import { Link } from 'react-router'


export default class SingleBook extends React.Component{
    /*<p><Link to={`/genre/${genre.id}`}>{genre.title}</Link></p>*/
    render(){
        const {title,img,author,genre,desc} = this.props.item;
        return(
            <div className="single-book">
                <h2>{ title }</h2>
                <img src={img} />
                <div>
                    <p>Author: <Link to={`/authors/${author.id}`}>{author.name}</Link></p>
                    <p>{genre}</p>
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
        genre: PropTypes.string
        /*genre: PropTypes.shape({
            id:PropTypes.number.isRequired,
            title:PropTypes.string
        })*/
    }).isRequired
};