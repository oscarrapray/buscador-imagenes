import React from 'react'
import Imagen from './Imagen';

const Listado = ({imagenes}) =>{
    return(
        <div className="container-card">
            {imagenes.map(imagen => (
                <Imagen 
                    key={imagen.id}
                    imagen={imagen}
                />
            ))}
        </div>
    )
}

export default Listado