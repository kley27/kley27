import React from 'react'
import UsuarioIndividual from './UsuarioIndividual'
function ListaUsuarios(){
    return(
        //Invocamos otro componente
        <div>
            <h2> ListaUsuarios</h2>
            <UsuarioIndividual/>
        </div>
    )
}

export default ListaUsuarios