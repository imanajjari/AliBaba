import React from 'react';

export const MobilApp = () => {
    return (
        <div className='flex justify-between border border-2 border-slate-300 p-4 border-12 lg:px-[100px]'>
            <img src="/images/bg-mobileApp.webp" alt="bg-mobileApp" className='w-1/3 md:w-1/2 lg:w-1/4 '/>
            <img src="/images/barcode.png" alt="barcode.png" className=' hidden lg:block w-[148px] h-[185px] mt-20'/>

            <div className='flex flex-col justify-center text-center '>
                <h3 className='p-4 font-bold text-2xl md:text-6xl'>
                    اپلیکیشن علی بابا
                </h3>
                <p className='p-2 md:text-2xl md:text-gray-500'>
                    همه سفر ها در جیب شماس 
                </p>
                <a href='#' className='bg-cyan-600 p-4 border-12 text-white md:text-4xl md:mt-20'>راهنمای نصب</a>
            </div>
        </div>
    );
}

