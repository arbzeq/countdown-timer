import { useState, useEffect, useRef } from "react";
import "./CountdownTimer.css"

export function CountdownTimer(){
    const [timeLeft, setTimeLeft] = useState(4);
    const [isActive, setIsActive] = useState(true);

    useEffect({} = > ()

        if(isActive){
            setIsActive(false);
        }:
 
    ))


    return (
        <>
                <h1>Nedräkningstimer</h1>
                <h2>{timeLeft} sekunder kvar</h2>
                <div className="buttonContainer">
                    <button>Starta</button>
                    <button>Pausa</button>
                    <button>Återställ</button>
                </div>
        </>
    );

    
}



