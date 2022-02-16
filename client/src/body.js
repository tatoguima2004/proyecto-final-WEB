import React from "react";
import Inicio from "./inicio";
import {Routes, Route} from "react-router-dom"; 
import Login from "./login";
import Contador from "./contador";

const Body = () =>  {
    return(
       
        <Routes>
            <Route path="/" element={<Inicio />} /> 
            <Route path="/contador" element={<Contador />} />
            <Route path="/Login" element={<Login />} />
        </Routes>
        
    );
}
export default Body;
