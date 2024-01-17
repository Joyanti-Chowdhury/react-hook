import  { useEffect, useState } from 'react';

const useUsersData = () => {

    const[isLoading,setLoading]=useState(false);
    const [error,setError] = useState(false);
    const [data, setData] = useState([])
    const controller = new AbortController();

 
 
     const url = 'https://jsonplaceholder.typicode.com/users'
 
 
     const getUsers = async() => {
         setLoading(true);
         try {
             const res = await fetch(url, {signal : controller.signal});
             const data = await res.json();
             setLoading(false);
             setData(data)
          
         } catch (error) {
      
             setError(true)
         }
     }
 
  useEffect(() => {

     getUsers();

     return () => {
        controller.abort();
    }
  },[])


    return {isLoading,error,data};
      
  
};

export default useUsersData;