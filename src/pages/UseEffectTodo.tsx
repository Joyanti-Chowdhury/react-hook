import React, { useEffect, useState } from 'react';


const obj1 = {name:'joya', email:'joya@gmail.com'}
const obj2 = obj1;
console.log(obj1 = obj2)

const UseEffectTodo = () => {


    const [hidden,setHidden] = useState(true);
    const [user, setUser] = useState({name:'',email:''})
    console.log(user)
     useEffect(()=>{
        console.log('Render')
   
     },[user.name, user.email])


  

    return (

    <div>
           <input onBlur={(e) => setUser({...user ,name:e.target.value})} className='border border-spacing-2  border-red-500  p-3 m-4' type="text" name='name' id='name' />
           <input onBlur={(e) => setUser({...user ,email:e.target.value})} className='border border-spacing-2 p-3 m-4 border-red-500 ' type="email" name='email' id='email' />
    </div>



    //     <div>
    //     <button onClick={() => setHidden((prev) => !prev)} className=" m-2 p-2 rounded-md bg-amber-500  ... " >{hidden ? "show": "Hide"}</button>
    //   {  !hidden && <Todo></Todo>}
    // </div>

   


    );
};


// const Counter = () => {
//     const [count,setCount] = useState(0);

//     useEffect(() => {
//     const intervalId=  setInterval(()=> {
//         console.log('Render');
//           setCount((prev) => prev + 1);
//       },1000);
//            return () =>{
//             clearInterval(intervalId)
//            }
//     },[])

//     return  <h2 className=' border  border-red-500 p-10'>{count}</h2>

// }

const Todo = () => {

 const controller = new AbortController();
 const signal = controller.signal;

    useEffect(() => {
       
              fetch('https://jsonplaceholder.typicode.com/todos/1', {signal})
              .then(res => res.json())
              .then(data => alert(data.title))


            return()=> {
                   controller.abort();
            } 

        },[])


    
    return <div className='border border-red-400 p-10 w-40 h-40'>

    Todo
    </div>
}

export default UseEffectTodo;