import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import axios from 'axios';

function App() {

  // state de la app
  const [ busqueda, setBusqueda ] = useState('paisaje');
  const [ imagenes, setImagenes] = useState([]);
  const [ actual, setActual ] = useState(1);
  const [ total, setTotal] = useState(5);
  
  const consultarApi = async () => {
    if(busqueda === '' ) return;

      const x = 24;
      const key = '1732750-d45b5378879d1e877cd1d35a6';
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${x}&page=${actual}`;
    
      const resp = await axios.get(url); 
      console.log(resp.data);
      setImagenes(resp.data.hits);

       // calcular el total de paginas
       const numPaginas = Math.ceil(resp.totalHits / x );
       setTotal(numPaginas);

       // Mover la pantalla hacia arriba
       const jumbotron = document.querySelector('.jumbotron');
       jumbotron.scrollIntoView({ behavior: 'smooth' })
}

  // definir la página anterior
  const paginaAnterior = () => {
    const z = actual - 1;

    if(z === 0 ) return;

    setActual(z);
  }

  // definir la pagina siguiente
  const paginaSiguiente = () => {
    const z = actual + 1;

    if(z > total ) return;

    setActual(z);
  }

  useEffect(() => {
    consultarApi();
  }, [busqueda, actual])

  return (
    <div className='container'>
      <div className="jumbotron">
          <p className="lead">Buscador de Imágenes</p>
          <Formulario setBusqueda={setBusqueda}/>
      </div>
      <div className='list-img'>
       <Listado imagenes={imagenes}/>
       { (actual === 1) ? null : (
            <button 
                type="button"
                className="btn-info"
                onClick={paginaAnterior}
            >&laquo; Anterior </button>
          ) }

          { (actual === total) ? null : (
            <button 
              type="button"
              className="btn-info"
              onClick={paginaSiguiente}
            >Siguiente &raquo;</button>
          ) }
      </div>
    </div>
    
  );
}

export default App;
