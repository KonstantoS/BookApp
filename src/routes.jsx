import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Base from './components/Basement'
import BooksListPage from './containers/BooksListPage'
import BookPage from './containers/BookPage'
import AuthorPage from './containers/AuthorPage'
import AuthorsListPage from './containers/AuthorsListPage'
import GenrePage from './containers/GenrePage'

export default (
    <Route path="/" component={Base}>
        <IndexRoute component={BooksListPage} />
        <Route path="/books/"
               component={BooksListPage} />
        <Route path="/books/:id"
               component={BookPage} />
        <Route path="/authors/:id"
               component={AuthorPage} />
        <Route path="/authors/"
               component={AuthorsListPage} />
        <Route path="/genre/:id"
               component={GenrePage} />
    </Route>
)