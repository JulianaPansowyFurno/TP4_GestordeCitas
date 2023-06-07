import React from 'react';
import '../index.css';

const Tarjeta = ({ contenido, onEliminar, color }) => {
    
    const eliminar = () => {
      onEliminar();
    };

    const tarjetaStyle = {
      backgroundColor: color,
    };

    return (
      <div >
       
        <div className="one-half column">
            <h2>Administra tus citas</h2>
            <div className="cita">
            <p>Mascota: <span>{contenido.NombreMascota}</span></p>
              <p>Dueño: <span>{contenido.NombreDueño}</span></p>
              <p>Fecha: <span>{contenido.Fecha}</span></p>
              <p>Hora: <span>{contenido.Hora}</span></p>
              <p>Sintomas: <span>{contenido.Sintomas}</span></p>
            </div>
        <button className="button elimnar u-full-width" onClick={eliminar}>Eliminar</button>
        
        </div>
      </div>
    );
  };
  
  export default Tarjeta;