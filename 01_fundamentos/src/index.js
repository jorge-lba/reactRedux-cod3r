 import React from 'react'
 import ReactDom from 'react-dom'
//  import PrimeiroComponente from './componentes/PrimeiroComponente'
//  import ArrowComponente from './componentes/ArrowComponente'
//  import Props from './componentes/props'
//  import { CompA, CompB } from './componentes/doisComponentes'
//  import MultElementos from './componentes/multElementos'
// import FamiliaSilva from './componentes/familiaSilva'
// import Familia from './componentes/familia'
// import Membro from './componentes/membro'
// import ComponenteComFuncao from './componentes/componenteComFuncao'
// import Pai from './componentes/pai'
// import ComponenteClasse from './componentes/componenteClasse'
import Contador from './componentes/contador/contador'

const elemento = document.getElementById( 'root' )

ReactDom.render( 
    <div>
        <Contador numero = {0} />
        {/* <ComponenteClasse valor = "Test Value!" /> */}
        {/* <Pai /> */}
        {/* <ComponenteComFuncao /> */}
        {/* <Familia sobrenome = 'Pereira' > */}
            {/* <Membro nome = 'Andre' /> */}
            {/* <Membro nome = 'Ana' /> */}
            {/* <Membro nome = 'Mariana' /> */}
        {/* </Familia> */}
        {/* <FamiliaSilva/> */}
        {/* <PrimeiroComponente /> */}
        {/* <ArrowComponente /> */}
        {/* <Props valor="Bom Dia" aBcD={ Math.pow( 2, 8 ) }/> */}
        {/* <CompA valor = "Olá eu sou A!" />
        <CompB valor = "Olá eu sou B!" /> */}
        {/* <MultElementos /> */}
    </div>    
, elemento )