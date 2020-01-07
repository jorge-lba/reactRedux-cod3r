 import React from 'react'
 import ReactDom from 'react-dom'
 import PrimeiroComponente from './componentes/PrimeiroComponente'
 import ArrowComponente from './componentes/ArrowComponente'
 import Props from './componentes/props'

const elemento = document.getElementById( 'root' )

ReactDom.render( 
    <div>
        <PrimeiroComponente />
        <ArrowComponente />
        <Props valor="Bom Dia" aBcD={ Math.pow( 2, 8 ) }/>
    </div>    
, elemento )