import React from 'react';

const WithBorder = (WrappedComponent) => {
    return (props) =>(
        <div className='border-2 border-purple-500 rounded-full'>
            <WrappedComponent {...props}></WrappedComponent>
        </div>
   );
};

export default WithBorder;