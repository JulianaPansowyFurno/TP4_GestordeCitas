import React from 'react';
import '../index.css';

const Form = ({ onAgregarTarjeta }) => {

  const manejoSubmit = (e) => {
    e.preventDefault();
    const formulario = new FormData(e.target)
    const contenido={
      NombreMascota: formulario.get('mascota'),
      NombreDueño:formulario.get('propietario'),
      Fecha: formulario.get('fecha'),
      Hora: formulario.get('hora'),
      Sintomas: formulario.get('sintomas')
    }
    console.log(contenido)
    onAgregarTarjeta(contenido);
  
  }
  
  return (
    <div>

            <div className="one-half column" id='formSize'>
              <h2>Crear mi Cita</h2>
                <form onSubmit={manejoSubmit}>
                  <label>Nombre Mascota</label>
                  <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota"/>
                  <label>Nombre Dueño</label>
                  <input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota"/>
                  <label>Fecha</label>
                  <input type="date" name="fecha" className="u-full-width" />
                  <label>hora</label>
                  <input type="time" name="hora" className="u-full-width" />
                  <label>Sintomas</label>
                  <input type="text" name="sintomas" className="u-full-width" />
                  <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
                </form>
          
        </div>
    </div>

  );
}

export default Form;
