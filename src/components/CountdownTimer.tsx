import { useState, useEffect, useRef } from "react";
import "./CountdownTimer.css"

export function CountdownTimer(){
    const initialTime = 4; 
    const [timeLeft, setTimeLeft] = useState<number>(initialTime);
    const [isActive, setIsActive] = useState(false);
    const intervalID = useRef<number | null>(null);
    
    useEffect(() => {

        console.log("Just started useEffect ", intervalID, isActive)
        // if(timeLeft <= 0){
        //     console.log("Inside timeLeft <= 0 ", intervalID);
        //     clearInterval(intervalID.current as number);

        // }
        
        if(isActive && timeLeft > 0){
            intervalID.current = setInterval(() => {
                if(timeLeft > 0){
                    setTimeLeft((t) => (t - 1))
                    setIsActive(true);
                }else{
                    setIsActive(false);
                }  
            }, 1000)
            
        }else if(timeLeft === 0){
            setIsActive(false);
            console.log("Not active", intervalID.current as number);
        }
        
        return () => {
            if(intervalID.current){
                clearInterval(intervalID.current)
            }
        }

    }, [isActive, timeLeft]);
    
    

    function handleReset(){
        setTimeLeft(initialTime);
        setIsActive(false);
        
    }

    return (
        <>
                <h1>Nedräkningstimer</h1>
                <h2>{timeLeft} sekunder kvar</h2>
                <div className="buttonContainer">
                    <button onClick={() => setIsActive(true)}>Starta</button>
                    <button onClick={() => setIsActive(false)}>Pausa</button>
                    <button onClick={handleReset}>Återställ</button>
                </div>
        </>
    );

    
}



