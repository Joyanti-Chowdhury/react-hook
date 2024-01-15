import React, { ChangeEvent, useReducer } from 'react';
 
type TAction = {
     type: string;
     payload: string;
} 



// const initialState = {count: 0};
const initialState = {name: '',email:''};

// const reducer = (currentState,action) => {

//      console.log('Current State => ' ,currentState)
//      console.log('Action => ' ,action)
//     switch(action.type){
//         case 'increment':
//             return {count: currentState.count + 1};
//         case 'decrement':
//             return {count: currentState.count - 1};
//         case 'incrementBySetAmount':
//             return {count: currentState.count + action.payload};
//         default:
//             return currentState
//     }
// }
const reducer = (currentState:typeof initialState,action: TAction) => {

    //  console.log('Current State => ' ,currentState)
    //  console.log('Action => ' ,action)
    switch(action.type){
        case 'addName':
            return {  ...currentState, name: action.payload};
        case 'addEmail':
            return {  ...currentState, email: action.payload};
       
        default:
            return currentState;
    }
}



const UseReducerExample = () => {
    const [state,dispatch] = useReducer(reducer,initialState);

    const handleSubmit = (e : ChangeEvent<HTMLFormElement>) => [
        e.preventDefault(),
        console.log(state)
    ]

    // onClick={() => setCounter(counter + 1) }
    return (

        <div>
              <form onSubmit={handleSubmit} action="" >
                <input onChange={(e) => dispatch({type: 'addName',payload:e.target.value})}  className='border border-spacing-2 p-3 m-4' type="text" name='name' id='name' />
                <input  onChange={(e) => dispatch({type: 'addEmail', payload:e.target.value})} className='border border-spacing-2 p-3 m-4' type="text" name='email' id='email' />
                <button type='submit'>Submit</button>
                {/* onChange={(e) => setUser({ ...user ,email:e.target.value})}  */}
            </form>
        </div>





        // <div>
        //  <h1>UseReducer Example</h1>
        //  <h1>Count : {state.count}</h1>
        // <button type="button" 
        // onClick={()=> dispatch({type:'increment'})}
        // className="bg-indigo-500 ... m-2 p-2 rounded-md">  
        //  Increment
        //   </button>
        // <button 
        //  onClick={()=> dispatch({type:'decrement'})}
        // type="button" className="bg-indigo-500 ... m-2 p-2 rounded-md">  
        //   Decrement
        //   </button>
        // <button 
        //  onClick={()=> dispatch({type:'incrementBySetAmount',payload: 3})}
        // type="button" className="bg-indigo-500 ... m-2 p-2 rounded-md">  
        //     incrementBySetAmount
        //   </button>
        // <button type="button" className="bg-indigo-500 ... m-2 p-2 rounded-md">  
        // Reset
        //   </button>
        // </div>
     
    );
};

export default UseReducerExample;