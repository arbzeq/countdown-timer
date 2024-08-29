import { useState, useEffect, useRef } from "react";
import "./CountdownTimer.css"

export function CountdownTimer(){
    const [timeLeft, setTimeLeft] = useState<number>(4);
    const [isActive, setIsActive] = useState(true);
    const timerRef = useRef();
    const timerRef = useRef();

    useEffect(() => {
        if(isActive){
            setIsActive(false);
        };


    }, [timeLeft, isActive, ]);

       
   

    
 
    
    function handleStart(){
        setInterval(()=> {
            while(timeLeft >= 0 && isActive){
                setTimeLeft((timeLeft) => (timeLeft - 1))
            };
        }, 1000);
    }


    return (
        <>
                <h1>Nedräkningstimer</h1>
                <h2 ref={timerRef}>{timeLeft} sekunder kvar</h2>
                <div className="buttonContainer">
                    <button ref={}>Starta</button>
                    <button>Pausa</button>
                    <button>Återställ</button>
                </div>
        </>
    );

    
}



