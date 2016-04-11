const genres = (state = {
    isFetching: false,
    items: []
}, action) => {
    switch(action.type){
        case 'REQUEST_GENRES':
            return Object.assign({},state,{
               isFetching: true
            });
        case 'RECEIVE_GENRES':
            return Object.assign({},state,{
                isFetching: false,
                items: action.genres
            });
        default:
            return state;
    }
};
export default genres;