import React, {useState} from "react";

const Semaforo = (props) => {
    const [ color, setColor] = useState("red");
    let b = "brillo";
    return(
        <div>
            <div id="barra"></div>
            <div className="rectangulo">
                <div className={"circulo rojo " + (color == "rojo" ? "brillo":"")} onClick = { () => setColor("rojo") }></div>
                <div className={"circulo amarillo " + (color == "amarillo" ? "brillo":"")} onClick = { () => setColor("amarillo") }></div>
                <div className={"circulo verde " + (color == "verde" ? "brillo":"")} onClick = { () => setColor("verde") }></div>
            </div>
        </div>
        )
}
export default Semaforo;