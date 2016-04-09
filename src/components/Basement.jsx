import React, {PropTypes} from 'react'
import Header from './Header'

class Base extends React.Component{
    render(){
        return(
            <div className="wrap">
                <Header />

            </div>
        )
    }
}

Base.propTypes = {
    children: PropTypes.element
};

export default base;
