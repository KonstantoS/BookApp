export const setFilter = (field) => {
    return {
        type: 'SET_FILTER_FIELD',
        field
    }
};

export const setSortType = (vector) => {
    return {
        type: 'SET_FILTER_TYPE',
        vector
    }
};