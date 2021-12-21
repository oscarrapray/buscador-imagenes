import React from 'react'

const Imagen = ({imagen}) =>{

    // extraer las variables
const { largeImageURL, likes, previewURL, tags, views } = imagen;

    return(
            <div className="card">
                <img src={previewURL} alt={tags} className="card-img" />

                <div className="card-body">
                    <p className="card-text">{likes} Me Gusta</p>
                    <p className="card-text">{views} Vistas</p>
                </div>

                <div className="card-footer">
                    <a
                        href= {largeImageURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn_enviar"
                    >Ver Imagen</a>
                </div>
            </div>
    )
}

export default Imagen