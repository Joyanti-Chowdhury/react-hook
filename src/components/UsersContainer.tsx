import React from 'react';
import UserList from './UserList';
import useUsersData from '../hooks/useUsersData';

const UsersContainer = () => {
 const {isLoading,error,data} = useUsersData();

 const props = {
    isLoading,
    error,
    data,


}

 
    return (
       <UserList {...props} ></UserList>
    );
};

export default UsersContainer;