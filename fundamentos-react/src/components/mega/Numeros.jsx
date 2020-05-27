import React from "react";

export default props => {
    return (
        <div>
            <p>
                {props.numeros.map((el, i) => {
                    if (i === props.numeros.length-1) {
                        return el
                    } else {
                        return el + ', '
                    }
                })}
            </p>
        </div>
    )
}