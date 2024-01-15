 import React from 'react';
import  { useState,Dispatch } from 'react';




type TCounter = {
  counter:number,
setCounter: React.Dispatch<React.SetStateAction<number>>
}
const UseStateExample = ({counter,setCounter} : TCounter) => {
//  const [counter,setCounter] = useState(0);

//  const handleIncreament = () =>{
//     setCounter((prevState) =>prevState + 1);
//     setCounter((prevState) =>prevState + 1);
//     setCounter((prevState) =>prevState + 1);


//  }
 const handleAsyncIncrement = () =>{
  setTimeout(() =>{
    //   setCounter(counter + 1)
      setCounter((prevState) =>prevState + 1)
  },2000)


 }


//  const handleDecreament = () =>{
//     setCounter((prevState) =>prevState - 1);
//     setCounter((prevState) =>prevState - 1);
//     setCounter((prevState) =>prevState - 1);


//  }
 const handleReset = () =>{
    setCounter((prevState) =>prevState - 1);
  


 }
     
    return (
        <div>
            <h1 className='text-2xl'>{counter}</h1>
         {/* <div>
         <button  onClick={() => setCounter(counter + 1) } >Increment</button>
            <button className='btn btn-primary'>Decrement</button>
            <button className='btn primary'> Reset</button>
            <button type="button" className=" m-2 p-2 rounded-md bg-amber-500  ... " onClick={() => setCounter(0) }>
              <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
  
             </svg> 
            Reset Now
          </button>
         </div> */}

            <button type="button" className="bg-indigo-500 ... m-2 p-2 rounded-md"  onClick={handleAsyncIncrement}>
             
            Async Increment
          </button>
      
            <button type="button" className="bg-amber-500 ... m-2 p-2 rounded-md"  onClick={() => setCounter(counter + 1) } >
              
             Increment
          </button>
      
            <button type="button" className=" m-2 p-2 rounded-md bg-amber-500  ... " onClick={handleReset}>
              
            Reset Now
          </button>
      
        </div>
    );
};

export default UseStateExample;