import React, {useState} from "react";

const DayTime = (props) => {
    const [fechaInicio,setFechaInicio]=useState("");//Ojo, son strings
    const [fechaFin,setFechaFin]=useState("");
    const [timeInput,settimeInput]=useState("No has introducido fecha y hora ");
    
    //fechaFin,fechaInicio son String, con Date.
    //Parse convierte en formato Date con valores en ms y es posible operar matematicamente. 
    const numeroHoras = () =>{
        if(fechaFin != "" && fechaInicio != "")
        {
            let i=Date.parse(fechaFin);
            let j=Date.parse(fechaInicio);
            let k=Math.trunc((i-j)/(60*60*1000));
            console.log("El valor del truncado es:",i);
            return k;
        }   
        return " ";
    }
    const [nHoras,setnHoras]=useState("");
    //retorna un string
    const getFechaFin = () =>{let x=document.getElementById("finServicio").value;
        console.log("dentro de getfecha fin",x)
        return x;
    }

    const getFechaInicio = () =>{let x=document.getElementById("inicioServicio").value;
console.log("dentro de getFechaInicio",x)
return x;}
    
    const getTimeInput = () => {let x=document.getElementById("getTime").value;
    console.log("dentro de getTimeInput",x)
return x;
};
    
    return(
        <div>
            <div className="inicioTiempo my-3">
                <label for="meeting-time">Start time booking:</label>
                <input type="datetime-local" id="inicioServicio"
                    name="meeting-time" 
                    onChange={()=>setFechaInicio(getFechaInicio())}/>
            </div>
            <div className="finalTiempo my-3">
                <label for="meeting-time">End time booking : </label>
                <input type="datetime-local" id="finServicio"
                    name="meeting-time" 
                    onChange={()=>setFechaFin(getFechaFin())}/>
            </div> 
            <div className="numeroHoras">
                    <label for="fname">Booking time </label>
                    <input type="text"  id="fname" size="3"
                    value={numeroHoras()}/>
                    <p>HORAS</p>       
            </div>

            <div className="getValue">
                <label for="init-time">Time Value</label>
                <input type="datetime-local" name="init-time" id="getTime" 
                onChange={()=>settimeInput(getTimeInput())}/>
            </div>
            <div><h2>El valor introducido es:{timeInput}</h2></div>
        </div>
        )
}
export default DayTime;