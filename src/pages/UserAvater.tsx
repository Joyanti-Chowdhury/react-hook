import React from 'react';

const UserAvater = ({imageURL}) => {
    return (
        <div className='h-40 w-40'>
            <img  className='rounded-full' src={imageURL} alt="" />
        </div>
    );
};

export default UserAvater;