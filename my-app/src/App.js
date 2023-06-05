import React, { useState } from 'react';
import Form from './components/Form'
import Tarjeta from './components/Tarjeta'

const App = () => {
    const[tarjetas, setTarjeta] = useState([]);

    const agregatTarjeta = (contenido) => {
        const nuevaTarjeta = {
            id: new Date().getTime(),
            contenido: contenido
        }
    
        setTarjeta([...tarjetas, nuevaTarjeta]);
        console.log(tarjetas)
    };

    const eliminarTarjeta = (id) => {
        const nuevasTarjeta = tarjetas.filter((tarjeta) => tarjeta.id !== id);

    };
    return (
        <div>
            <Form onAgregarTarjeta={agregatTarjeta} />
            <div className="row justify-content-center mt-4">
                {tarjetas.map((tarjeta) => 
                (
                    <Tarjeta
                        key={tarjeta.id}
                        contenido={tarjeta.contenido}
                        onEliminar={ () => eliminarTarjeta(tarjeta.id)}
                        color={tarjeta.color}
                        />
                )
                )}
            </div>
        </div>
    );
};
export default App;