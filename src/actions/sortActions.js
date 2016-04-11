export const setFilter = (field) => {
    return {
        type: 'SET_FILTER_FIELD',
        field
    }
};

export const setSortType = (direction) => {
    return {
        type: 'SET_FILTER_TYPE',
        direction
    }
};