import React,{useState} from 'react'
import Error from './Error';

const Formulario = ({setBusqueda}) =>{

    const [error, setError] = useState(false);
    const [ termino, setTermino] = useState({
        nombre: ''
    })
    const {nombre} = termino
    
    const handleChange = e => {
        setTermino({
            ...termino,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        // validar
        if(nombre.trim() === '') {
           setError(true);
            return;
        }
        setError(false);
        // enviar el termino de búsqueda hacia el componente principal
        setBusqueda(nombre);
    }
    return(
        <form onSubmit={handleSubmit} className='form-control'>
                <div className="item-imput">
                    <input type="text"  className='txt_input' 
                    name='nombre'
                    value={nombre}
                    onChange={handleChange}
                    />
                </div>
                <div className="item-btn">
                    <input type="submit" value="Buscar" className='btn_enviar'/>
                </div>
            { error ? <Error mensaje="Agrega un término de búsqueda" /> : null }
        </form>
    )
}

export default Formulario