import React from "react";
import Membro from "./Membro";

export default props =>
    <div>
        <Membro nome={"Rafael"} sobrenome={props.sobrenome}/>
        <Membro nome={"Daniela"} sobrenome={props.sobrenome}/>
        <Membro nome={"Felipe"} sobrenome={props.sobrenome}/>
        <Membro nome={"Eliane"} sobrenome={props.sobrenome}/>
    </div>
