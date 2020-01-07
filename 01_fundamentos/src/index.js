 import React from 'react'
 import ReactDom from 'react-dom'
 import PrimeiroComponente from './componentes/PrimeiroComponente'
 import ArrowComponente from './componentes/ArrowComponente'
 import Props from './componentes/props'
 import { CompA, CompB } from './componentes/doisComponentes'
 import MultElementos from './componentes/multElementos'

const elemento = document.getElementById( 'root' )

ReactDom.render( 
    <div>
        <PrimeiroComponente />
        <ArrowComponente />
        <Props valor="Bom Dia" aBcD={ Math.pow( 2, 8 ) }/>
        <CompA valor = "Olá eu sou A!" />
        <CompB valor = "Olá eu sou B!" />
        <MultElementos />
    </div>    
, elemento )