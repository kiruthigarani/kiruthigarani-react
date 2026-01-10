import React, {useState,useMemo,useRef} from 'react';
import findNthPrime from '../utils/calcPrime';
export default function AboutUsComponent() {
    const [heavyCalculation, setHeavyCalculation] = useState("");
    const [showTheme, setShowThem] = useState(true);
    
    const inputRef = useRef (null);
    console.log("AboutUsComponent Rendered");

    // const prime = useMemo(()=>{
    //     return findNthPrime(Number(heavyCalculation));
    // },[heavyCalculation]);
    const prime = ()=>{
        console.log("Calculating Prime...");
        return findNthPrime(Number(heavyCalculation));
    };

    const handleClick = () => {
        console.log("Input Value:", inputRef.current.value);
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "lightblue";
    }
    return (
        <div className="about-us">
            <h1>About Us</h1>
            <p>
                Welcome to our company. We are dedicated to providing exceptional services
                and solutions to our clients worldwide. With over a decade of experience,
                we have established ourselves as industry leaders committed to innovation
                and excellence.
            </p>
            <p>
                Our mission is to empower businesses through cutting-edge technology and
                creative solutions. We believe in building lasting partnerships with our
                clients and delivering results that exceed expectations.
            </p>
            <p>
                Our team consists of passionate professionals with diverse expertise in
                software development, design, and digital strategy. We work collaboratively
                to bring your vision to life and drive your business forward.
            </p>

        <div>
                <h2 className='font-bold'>UseMemo</h2>
                <div className={`border-2 border-black m-2 p-2 h-64 ${showTheme ? 'bg-gray-800' : ''}`}>
                    <button className='m-2 p-2 border-2 bg-green-200' onClick={() => setShowThem(!showTheme)}>Toggle</button>
                    <input className='border-2' name="heavy_calculattion" type="number" onChange={(e) =>{setHeavyCalculation(e.target.value)}} value={heavyCalculation} />

                    <p>{heavyCalculation && `The ${heavyCalculation}th prime number is ${prime()}`}</p>
                </div>
        </div>

         <div>
                <h2 className='font-bold'>UseRef</h2>
                <div className= "border-2 border-black m-2 p-2 h-64">
                    <button className='m-2 p-2 border-2 bg-green-200' onClick={handleClick}>Click Me!!</button>
                    <input className={"border-2 p-4"} ref={inputRef} />

                </div>
        </div>
        </div>

        
    );
}