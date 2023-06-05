import React from 'react';

const Tarjeta = ({ contenido, onEliminar }) => {
    
    const eliminar = () => {
      onEliminar();
    };

    return (
      <div className="tarjeta">
        <p>{contenido.NombreMascota}</p>
        <p>{contenido.NombreDueño}</p>
        <p>{contenido.Fecha}</p>
        <p>{contenido.Hora}</p>
        <p>{contenido.Sintomas}</p>

        <button onClick={eliminar}>Eliminar</button>
      </div>
    );
  };
  
  export default Tarjeta;