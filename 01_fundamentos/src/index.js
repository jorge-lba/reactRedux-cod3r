 import React from 'react'
 import ReactDom from 'react-dom'
 import PrimeiroComponente from './componentes/PrimeiroComponente'
 import ArrowComponente from './componentes/ArrowComponente'

const elemento = document.getElementById( 'root' )

ReactDom.render( 
    <div>
        <PrimeiroComponente />
        <ArrowComponente />
    </div>    
, elemento )