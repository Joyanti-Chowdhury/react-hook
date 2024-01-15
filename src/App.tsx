import { useState } from 'react'

import './App.css'
import UseStateExample from './pages/useStateExample'
import UseStateForm from './pages/UseStateForm';
import UseReducerExample from './pages/UseReducerExample';
import UseCallbackExample from './pages/UseCallbackExample';
import UseEffectExample from './pages/useEffectExample';
import UseEffectTodo from './pages/UseEffectTodo';

function App() {
  // const [count, setCount] = useState(0)
  const [counter,setCounter] = useState(0);

  return (
    <div>
      <UseEffectTodo></UseEffectTodo>
    {/* <UseEffectExample></UseEffectExample> */}
{/* <UseCallbackExample></UseCallbackExample> */}

      <UseReducerExample/>
      
    <UseStateExample counter={counter} setCounter={setCounter}></UseStateExample>
     
     <UseStateForm></UseStateForm>
    </div>
  )
}

export default App
