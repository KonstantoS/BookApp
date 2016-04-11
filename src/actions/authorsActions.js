import 'babel-polyfill'

function requestAuthors(){
    return {
        type:'REQUEST_AUTHORS'
    }
}
function receiveAuthors(json){
    return {
        type: 'RECEIVE_AUTHORS',
        authors: json
    }
}

export default function fetchAuthorsData(){
    return dispatch => {
        dispatch(requestAuthors());
        return fetch(`${window.location.origin}/data/authors.json`)
            .then(response => response.json())
            .then(json => dispatch(receiveAuthors(json)))
    }
}