 import React from 'react'
 import ReactDom from 'react-dom'
 import PrimeiroComponente from './componentes/PrimeiroComponente'

const elemento = document.getElementById( 'root' )

ReactDom.render( 
    <div>
        <PrimeiroComponente />
    </div>    
, elemento )