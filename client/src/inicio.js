import "./main.css"
import React from 'react';

const Inicio = () => {
    return(
        <div><main className="contenedor">
        <p>En esta pagina podras probar diferentes cosas</p>
        <h2>Cosas que podras probar actualmente:</h2>
        <ul>
            <li>Sistema de logueo que guarda tus datos en una base de datos que se guarda al irse</li>
            <li>Contador de clicks negativo y positivo</li>
            <li>WIP</li>
        </ul>
    </main>
    </div>
    )
}
export default Inicio;