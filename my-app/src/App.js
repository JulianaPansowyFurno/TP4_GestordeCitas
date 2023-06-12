import React, { useState } from 'react';
import Form from './components/Form'
import Tarjeta from './components/Tarjeta'
import './index.css';

const App = () => {
    const[tarjetas, setTarjeta] = useState([]);

    const agregarTarjeta = (contenido) => {
        const nuevaTarjeta = {
            id: new Date().getTime(),
            contenido: contenido
        }
    
        setTarjeta([...tarjetas, nuevaTarjeta]);
        // console.log(tarjetas)
    };

    const eliminarTarjeta = (id) => {
        console.log(id)
        setTarjeta(tarjetas.filter((tarjeta) => tarjeta.id !== id))
    };

    return (
        <div>
            <Form onAgregarTarjeta={agregarTarjeta} />
            <h2>Administra tus citas</h2>
            <div className="row  mt-2" id='pepe' >
                {tarjetas.map((tarjetas) => 
                (
                    <Tarjeta
                        key={tarjetas.id}
                        contenido={tarjetas.contenido}
                        onEliminar={()=>eliminarTarjeta(tarjetas.id)}
                        color={tarjetas.color}
                        
                    />
                )
                )}
            </div>
        </div>
    );
};
export default App;