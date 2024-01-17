import {  useContext, useState } from 'react'

import './App.css'
// import UseStateExample from './pages/useStateExample'
// import UseStateForm from './pages/UseStateForm';
// import UseReducerExample from './pages/UseReducerExample';
// import UseCallbackExample from './pages/UseCallbackExample';
// import UseEffectExample from './pages/useEffectExample';
// import UseEffectTodo from './pages/UseEffectTodo';
// import UseRefExample from './pages/UseRefExample';
import { TThemeContext, ThemeContext } from './context/ThemeProvider';
// import { MenuItem, MenuList } from './components/Menu';
// import Profile from './pages/profile';
// import GameResult from './pages/GameResult';
import UsersContainer from './components/UsersContainer';
import Select from './components/Select';

function App() {
  // const [count, setCount] = useState(0)
  // const [counter,setCounter] = useState(0);

  const {dark,setDark} = useContext(ThemeContext) as TThemeContext;

  // console.log(dark)

  return (
    <div className={`h-screen w-full flex justify-center items-center ${dark ? "bg-black" : "bg-white" }`}>

       {/* <button className="bg-indigo-500 ... m-2 p-2 rounded-md" onClick={() => setDark(!dark)}>Toggle</button> */}
    


<Select>
  <Select.SelectOption value="option1">One</Select.SelectOption>
  <Select.SelectOption value="option2">Two</Select.SelectOption>
  <Select.SelectOption value="option3">Three</Select.SelectOption>
</Select>





{/* 
 <UsersContainer></UsersContainer> */}
{/* it has problem with users component with todo? */}







  {/* <MenuList>
    <MenuItem></MenuItem>
  </MenuList> */}

{/* <GameResult></GameResult> */}
{/* <Profile></Profile> */}

      {/* <UseRefExample></UseRefExample> */}
      {/* <UseEffectTodo></UseEffectTodo> */}
    {/* <UseEffectExample></UseEffectExample> */}
{/* <UseCallbackExample></UseCallbackExample> */}

      {/* <UseReducerExample/> */}
      
    {/* <UseStateExample counter={counter} setCounter={setCounter}></UseStateExample> */}
     
     {/* <UseStateForm></UseStateForm> */}
    </div>
  )
}

export default App
