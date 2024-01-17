import React, { useEffect, useRef, } from 'react';
import CustomInput from '../components/CustomInput';

const UseRefExample = () => {
    // const [count, setCount] = useState(0);
    const myRef = useRef<HTMLInputElement | null>(null);
    

    useEffect(()=>{

        myRef.current?.focus();

    },[])


// const increment = ()=>{
//     myRef.current = myRef.current + 1;
//     setCount(count + 1);
//     console.log('State =>',count)
//     console.log('Ref =>' , myRef.current)
// }

   const handleSubmit = (e : React.FormEvent) =>{
    e.preventDefault();

    console.log(myRef.current.value)
   }





    return (
        <div>
            <h2>use ref</h2>
          <form  onSubmit={handleSubmit}>
          <CustomInput ref={myRef} className="border border-blue-500 border-spacing-2 p-3 m-4"></CustomInput>
          </form>
    
          <button type='submit' className='bg-indigo-500 ... m-2 p-2 rounded-md'>Submit</button>



            {/* <button type="button" className="bg-indigo-500 ... m-2 p-2 rounded-md"  onClick= {() => increment()}>
             
            {count}
            {myRef.current}
           </button> */}
        </div>
    );
};

export default UseRefExample;