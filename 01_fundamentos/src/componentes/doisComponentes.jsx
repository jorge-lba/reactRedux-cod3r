import React from 'react'

const CompA = props => 
    <h3>Primeiro diz: { props.valor } </h3>

const CompB = props => 
    <h3> Segundo diz: {props.valor} </h3>

export { CompA, CompB }