//Sort direction container <SortDir dir="ASC||DESC">...</SortDir>
//Sort direction container <SortField field="author|title">...</SortField>

import React from 'react'
import {connect} from 'react-redux'
import DumbLink from '../components/DumbLink'
import { setSortType, setFilter } from '../actions/sortActions'

const mapStateToSortDirProps = (state, componentProps) => {
    return {
        active: (componentProps.dir === state.app.filtering.direction)
    }
};

const mapDispatchToSortDirProps = (dispatch, componentProps) => {
    return {
        onClick: () => {
            dispatch(setSortType(componentProps.dir))
        }
    }
};



const mapStateToSortFieldProps = (state, componentProps) => {
    return {
        active: (componentProps.field === state.app.filtering.field)
    }
};

const mapDispatchToSortFieldProps = (dispatch, componentProps) => {
    return {
        onClick: () => {
            dispatch(setSortType(componentProps.field))
        }
    }
};


export const SortDir = connect(
    mapStateToSortDirProps,
    mapDispatchToSortDirProps
)(DumbLink);

export const SortField = connect(
    mapStateToSortFieldProps,
    mapDispatchToSortFieldProps
)(DumbLink);