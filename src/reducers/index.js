import { combineReducers } from 'redux'
import books from './books'
import authors from './authors'
import field from './displayFilter'
import direction from './sortType'
import genres from './genres'

const rootReducer = combineReducers({
    books,
    authors,
    genres,
    filtering:
        combineReducers({
            field,
            direction
        })
});

export default rootReducer;