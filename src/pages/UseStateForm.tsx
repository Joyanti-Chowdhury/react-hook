
import  React, { useState } from 'react';

const UseStateForm = () => {
    // const [name,setName] = useState('');
    // const [email,setEmail] = useState('');
    // console.log(name,email)

    const [user,setUser] = useState({name:'', email:''});

 const handleSubmit = (e: React.ChangeEvent<HTMLFormElement> ) =>{

    e.preventDefault();
    console.log(user);
 }

 const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    // setUser({ ...user , [e.target.id]:e.target.value})

    console.log(user);
    const inputName = e.target.name;
    const value = e.target.value;
     
    console.log({[inputName]:value});

    setUser({...user, [inputName]: value})
 }

//  Dry : Don't repeat yourself

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input onChange={handleChange}  className='border border-spacing-2 p-3 m-4' type="text" name='name' id='name' />
                <input  onChange={(e) => setUser({ ...user ,email:e.target.value})}  className='border border-spacing-2 p-3 m-4' type="text" name='email' id='email' />
                <button type='submit'>Submit</button>

            </form>
        </div>
    );
};

export default UseStateForm;