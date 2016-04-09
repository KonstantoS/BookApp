import 'babel-polyfill'

function requestBooks(){
    return {
        type:'REQUEST_BOOKS'
    }
}
function receiveBooks(json){
    return {
        type: 'RECEIVE_BOOKS',
        books: json
    }
}

export default function fetchBooksData(){
    return dispatch => {
        dispatch(requestBooks());
        return fetch(`${window.location.origin}/data/books.json`)
            .then(response => response.json())
            .then(json => dispatch(receiveBooks(json)))
    }
}