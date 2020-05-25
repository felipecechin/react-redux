import React from "react";
import DiretaFilho from "./DiretaFilho";

export default props => {
    return (
        <div>
            <DiretaFilho nome={'Felipe'} idade={20} nerd={true}/>
            <DiretaFilho nome={'João'} idade={13} nerd={true}/>
        </div>
    )
}