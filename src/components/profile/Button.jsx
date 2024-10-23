import React from 'react';

export const Button = ({children}) => {
    return (
        <button className='text-[#0077DB] hover:bg-[#F2F9FF] hover:border border-[#0077DB] border-12 transition-all lg:text-2xl p-2'>{children}</button>

    );
}


