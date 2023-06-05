import React from 'react';

const Tarjeta = ({ contenido, onEliminar }) => {
    
    const eliminar = () => {
      onEliminar();
    };

    return (
      <div className="tarjeta">
        <p>{contenido}</p>
        <button onClick={eliminar}>Eliminar</button>
      </div>
    );
  };
  
  export default Tarjeta;