 import React from 'react'
 import ReactDom from 'react-dom'

const elemento = document.getElementById( 'root' )

// ReactDom.render( <h1>Olá Mundo React</h1>, elemento )

ReactDom.render( 
    <ul>
        <li>1) Pedro</li>
        <li>2) Maria</li>
        <li>3) Ana</li>
    </ul>    
, elemento )