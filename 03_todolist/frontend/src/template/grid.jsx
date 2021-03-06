import React, { Component } from 'react'

export default class Grid extends Component {
    toCssClasses( numbers ) {
        const cols = numbers ? numbers.split( ' ' ) :[]
        const type = [ 'xs', 'sm', 'md', 'lg' ]
        let classes = ''

        // Exemplo da Aula
        // if( cols[0] ) classes += `col-xs-${cols[0]}`
        // if( cols[1] ) classes += ` col-sm-${cols[1]}`
        // if( cols[2] ) classes += ` col-md-${cols[2]}`
        // if( cols[3] ) classes += ` col-lg-${cols[3]}`


        // Refatorado
        classes = cols.map(  ( number, index ) => `col-${type[ index ]}-${number}` )

        return classes.join(' ')
    }

    render( ) {
        const gridClasses = this.toCssClasses( this.props.cols || 12 )
        return (
            <div className={ gridClasses } >
                { this.props.children }
            </div>
        )
    }
} 