import React, {useState,useMemo,useRef,useEffect} from 'react';
import findNthPrime from '../utils/calcPrime';
export default function AboutUsComponent() {
    const [heavyCalculation, setHeavyCalculation] = useState("");
    const [showTheme, setShowThem] = useState(true);
     const [y,setY] = useState (0);
    const inputRef = useRef (null);
    console.log("AboutUsComponent Rendered");

    let x=0;
      const z = useRef (0);
      useEffect(() => {
        // increment once on mount (avoid updating state during render)
       console.log("Component rendered");
    }, []);

  
  
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
                <div>
                    <button className='m-2 p-2 border-2 bg-green-200' onClick ={
                        () => {
                            x= x ? x+1 : 1; 
                            console.log ("x value:",x)
                        }
                        }>Increment X</button>
                <span>let x=</span> <span>{x+1}</span>
                </div>
                <div>
                    <button className='m-2 p-2 border-2 bg-green-200' onClick ={
                        () => {
                            setY (y+1);  
                          
                        }
                        }>Increment Y</button>
                         <span>State y=</span> <span>{y}</span>
                        </div>
                <div>
                    <button className='m-2 p-2 border-2 bg-green-200' onClick ={
                        () => {
                           z.current = z.current + 1;  
                           console.log ("z value:",z.current)  
                        }
                        }>Increment Z</button>
                    <span>Ref z=</span> <span>{z.current}</span>
                </div>
               
               
        </div>

        </div>

        
    );
}