import React from 'react'
import Filho from './filho'

export default props => {
    const notificarSaida = lugar => 
        alert( `Liberado para ${lugar}` )
    
    return (
        <div>
            <Filho notificarSaida = { notificarSaida } />
        </div>
    )
}