import React from 'react'
import { SortDir, SortField } from '../containers/SortLinks'

export const SortDirBlock = () => (
    <span className="sort-direction-block">
        Sort direction:
        {" "}
        <SortDir dir="ASC">ASC</SortDir>
        {" | "}
        <SortDir dir="DESC">DESC</SortDir>
    </span>
);

export const SortFieldBlock = () => (
    <span className="sort-field-block">
        Sort by:
        {" "}
        <SortField field="title">Book title</SortField>
        {" | "}
        <SortField field="author">Author</SortField>
    </span>
);