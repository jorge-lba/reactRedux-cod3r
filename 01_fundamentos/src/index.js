 import React from 'react'
 import ReactDom from 'react-dom'
//  import PrimeiroComponente from './componentes/PrimeiroComponente'
//  import ArrowComponente from './componentes/ArrowComponente'
//  import Props from './componentes/props'
//  import { CompA, CompB } from './componentes/doisComponentes'
//  import MultElementos from './componentes/multElementos'
// import FamiliaSilva from './componentes/familiaSilva'
import Familia from './componentes/familia'
import Membro from './componentes/membro'


const elemento = document.getElementById( 'root' )

ReactDom.render( 
    <div>
        <Familia>
            <Membro nome = 'Andre' sobrenome = 'Pereira' />
            <Membro nome = 'Mariana' sobrenome = 'Pereira' />
        </Familia>
        {/* <FamiliaSilva/> */}
        {/* <PrimeiroComponente /> */}
        {/* <ArrowComponente /> */}
        {/* <Props valor="Bom Dia" aBcD={ Math.pow( 2, 8 ) }/> */}
        {/* <CompA valor = "Olá eu sou A!" />
        <CompB valor = "Olá eu sou B!" /> */}
        {/* <MultElementos /> */}
    </div>    
, elemento )