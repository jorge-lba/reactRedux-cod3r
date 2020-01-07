import React, { Component } from 'react'

export default class Contador extends Component {


    maisUm = ( ) => {
        this.props.numero++
    }

    render ( ) {
        return (
            <div>
                <div>Numero: { this.props.numero } </div>
                <button onClick = { this.maisUm } >Incrementa</button>
                <button>Decrementa</button>
            </div>
        )
    }
}

////// Solução 01
    // constructor( props ) {
    //    super( props ) 
    //    this.maisUm = this.maisUm.bind( this )
    // }

////// Solução 02
    // <button onClick = { ( ) => this.maisUm } >Incrementa</button>