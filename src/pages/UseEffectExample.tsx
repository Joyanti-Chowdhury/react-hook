import React, { useEffect, useState } from 'react';

const UseEffectExample = () => {

  const [hidden,setHidden] = useState(false);
//   const [count,setCount] = useState(0);

//   useEffect(()=>{
//     setInterval(()=> {
//         // setCount((prev) => prev + 1);
//     },1000);
//     // console.log(count);
//   },[])

//   useEffect(() => {
//      console.log('Render');

//      return() => {
//          console.log('Inside cleanup');
//      }
//   },[hidden])

    return (
        <div>
            {/* <h1>UseCallback Example</h1>
            <h2 className=' border border-2 border-red-500 p-10'>{count}</h2> */}
            <button onClick={() => setHidden((prev) => !prev)} className=" m-2 p-2 rounded-md bg-amber-500  ... " >{hidden ? "show": "Hide"}</button>
          {  !hidden && <Counter></Counter>}
        </div>
    );
};

const Counter = () => {
    const [count,setCount] = useState(0);

    useEffect(() => {
    const intervalId=  setInterval(()=> {
        console.log('Render');
          setCount((prev) => prev + 1);
      },1000);
           return () =>{
            clearInterval(intervalId)
           }
    },[])

    return  <h2 className=' border  border-red-500 p-10'>{count}</h2>

}





export default UseEffectExample;