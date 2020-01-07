import React, { Component } from 'react'

export default class Contador extends Component {

    state = {
        numero: this.props.numeroInicial
    }

    maisUm = ( ) => {
        this.setState( { numero: this.state.numero + 1 } )
    }

    menosUm = ( ) => {
        this.setState( { numero: this.state.numero - 1 } )
    }

    alterarNumero = diferenca => 
        this.setState( { numero: this.state.numero + diferenca } )

    render ( ) {
        return (
            <div>
                <div>Numero: { this.state.numero } </div>
                <button onClick = { this.maisUm } >Incrementa</button>
                <button onClick = { this.menosUm } >Decrementa</button>
                <button onClick = { () => this.alterarNumero( 10 ) } >Inc 10</button>
                <button onClick = { () => this.alterarNumero( -5 ) } >Dec 5</button>
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