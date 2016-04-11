import 'babel-polyfill'

function requestGenres(){
    return {
        type:'REQUEST_GENRES'
    }
}
function receiveGenres(json){
    return {
        type: 'RECEIVE_GENRES',
        genres: json
    }
}

export default function fetchGenresData(){
    return dispatch => {
        dispatch(requestGenres());
        return fetch(`${window.location.origin}/data/genres.json`)
            .then(response => response.json())
            .then(json => dispatch(receiveGenres(json)))
    }
}