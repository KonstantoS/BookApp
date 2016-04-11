const authors = (state = {
    isFetching: false,
    items: []
}, action) => {
    switch(action.type){
        case 'REQUEST_AUTHORS':
            return Object.assign({},state,{
               isFetching: true
            });
        case 'RECEIVE_AUTHORS':
            return Object.assign({},state,{
                isFetching: false,
                items: action.authors
            });
        default:
            return state;
    }
};
export default authors;