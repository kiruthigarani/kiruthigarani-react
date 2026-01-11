import { useState,useRef, useEffect } from "react"
const StopWatch = ()=>{
    const [isRunning, setIsRunning] = useState (false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const elapsedTimeRef = useRef (null);
    const intervalRef = useRef (null);

    useEffect (() =>{
       intervalRef.current = setInterval (() =>{
            if (isRunning){
                setElapsedTime (Date.now() - elapsedTimeRef.current);
            }
        },10);

        return ()=>{
            clearInterval (intervalRef.current);

        }

    }, [isRunning]);
    const start = () =>{
        console.log("Start");
        elapsedTimeRef.current = Date.now() - elapsedTime;
        setIsRunning (true);
    }
    const stop = () =>{
        console.log("Stop");
         setIsRunning (false);
    }
    const reset = () =>{
        console.log("Reset");
         setElapsedTime (0);
         setIsRunning (false);
    }

    const formatTime = (time) =>{
        const getMilliseconds = `0${(time % 1000)}`.slice(-2);
        const totalSeconds = Math.floor(time / 1000);
        const getSeconds = `0${totalSeconds % 60}`.slice(-2);
        const totalMinutes = Math.floor(totalSeconds / 60);
        const getMinutes = `0${totalMinutes % 60}`.slice(-2);
        const getHours = `0${Math.floor(totalMinutes / 60)}`.slice(-2);
        return `${getHours} : ${getMinutes} : ${getSeconds} : ${getMilliseconds}`;
    }

    return (
        <div className="stop-watch text-center">
            <h1> {formatTime(elapsedTime)}</h1>
            <div>
                <button className="m-2 p-2 border-2 bg-green-200" onClick={start}>Start</button>
                <button className="m-2 p-2 border-2 bg-red-200" onClick={stop}>Stop</button>
                <button className="m-2 p-2 border-2 bg-yellow-200" onClick={reset}>Reset</button>
            </div>
        </div>
    )

}

export default StopWatch;