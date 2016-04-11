import React, {PropTypes} from 'react'
import { Link } from 'react-router'


export default class BookItem extends React.Component{
    constructor(props){
        super(props);
        this.renderAuthor = this.renderAuthor.bind(this);
    }
    renderAuthor(){
        const {author} = this.props.item;
        return(
            <p>Author: <Link to={`/authors/${author.id}`}>{author.name}</Link></p>
        );
    };
    render(){
        const {id,title,img,author,genre} = this.props.item;
        return(
            <div className="book-item">
                <Link to={`/books/${id}`}><img src={img} /></Link>
                <div>
                    <h3><Link to={`/books/${id}`}>{ title }</Link></h3>
                    { isNaN(author) ? this.renderAuthor() : ""}
                    <p>Genre: <Link to={`/genre/${genre.id}`}>{genre.title}</Link></p>
                </div>
            </div>
        )
    }
}

BookItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        author: PropTypes.shape({
            id:PropTypes.number.isRequired,
            name:PropTypes.string
        }),
        desc: PropTypes.string,
        genre: PropTypes.shape({
            id:PropTypes.number.isRequired,
            title:PropTypes.string
        })
    }).isRequired
};