import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => (
    <div role='from' className='todoForm' >
        <Grid cols='12 9 10'>
            <input id="description" className="form-control"
                onChange={ props.handleChange }
                placeholder='Adiciona uma tarefa' />    
        </Grid>
        
        <Grid cols='12 3 2'>
            <IconButton style= 'primary' icon= 'plus' 
                onClick={ props.handleAdd }
                value={ props.description } />
            <IconButton style= 'info' icon= 'search'
                onClick={ props.handleSearch } />
        </Grid>
    </div>       

)