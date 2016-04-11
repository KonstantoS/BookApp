const displayFilter = (state = "title", action) => {
    switch (action.type){
        case "SET_FILTER_FIELD":
            return action.field;
        default:
            return state;
    }
};

export default displayFilter;