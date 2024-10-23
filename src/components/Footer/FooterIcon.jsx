import React from 'react';

export const FooterIcon = ({img, title, text}) => {
    return (
        <div className='flex dr-rtl p-4 justify-start sm:justify-center w-[80%]'>
            <img src={img} alt={img} className='w-[64px] md:w-[80px]' />
            <div className='flex flex-col justify-center'>
                <h2 className='text-xl md:text-2xl md:mb-5'>{title}</h2>
                <p>{text}</p>
            </div>
        </div>
    );
}