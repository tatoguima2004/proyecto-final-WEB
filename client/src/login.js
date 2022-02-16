import React, { useState } from "react";
import Axios from "axios";
function App() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [data, setData] = useState(null);
  const register = () => {
    Axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: "http://localhost:4000/register",
    }).then((res) => console.log(res));
  };
  const login = () => {
    Axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:4000/login",
    }).then((res) => console.log(res));
  };
  const getUser = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/user",
    }).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };
  return (
    <div className="App">
      <div>
        <h1>Registrarse</h1>
        <input
          placeholder="usuario"
          onChange={(e) => setRegisterUsername(e.target.value)}
        />
        <input
        
          placeholder="contraseña"
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
        <button onClick={register}>Registro</button>
      </div>

      <div>
        <h1>Iniciar Sesion</h1>
        <input
          placeholder="usuario"
          onChange={(e) => setLoginUsername(e.target.value)}
        />
        <input
          placeholder="contraseña"
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <button onClick={login}>Iniciar</button>
      </div>

      <div>
        <h1>Mostrar usuario</h1>
        <button onClick={getUser}>Mostrar</button>
        {data ? <h1>Bienvenido {data.username}</h1> : null}
      </div>
    </div>
  );
}

export default App;
