import React from 'react'
import  { childrenWithProps }  from '../utils/utils'

export default props => 
    <div>
        <h1>Familia</h1>
        { childrenWithProps( props.children ,props ) }

        {/* { React.Children.map( props.children, child =>{
            return React.cloneElement( child, { ...props } )
        } ) } */}

        {/* { React.cloneElement( props.children, { ...props } ) } */}
        {/* { React.cloneElement( props.children,
            { sobrenome: props.sobrenome }    
        ) } */}
        {/* { props.children } */}
    </div>