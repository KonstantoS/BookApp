const sortType = (state = "ASC", action) => {
    switch(action.type){
        case "SET_FILTER_TYPE":
            return action.direction;
        default:
            return state;
    }
};
export default sortType;