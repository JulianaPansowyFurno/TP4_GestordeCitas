import './index.css';

function Tarjetas(cita) {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <h2>Administra tus citas</h2>
            <div className="cita">
              <p>Mascota: <span>cita.Mascota</span></p>
              <p>Dueño: <span>cita.Dueño</span></p>
              <p>Fecha: <span>cita.Fecha</span></p>
              <p>Hora: <span>cita.Hora</span></p>
              <p>Sintomas: <span>cita.Sintomas</span></p><button className="button elimnar u-full-width">Eliminar ×</button>
            </div>         
          </div>
        </div>            
      </div>
    </div>
);
}

export default Tarjetas;