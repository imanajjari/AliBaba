import React from 'react';

export const VisaCard = ({name ,img ,time ,price}) => {
    return (
        <div className='flex justify-center mb-4'>
            <div className='dr-rtl w-[270px] border-12 border-1 border-slate-300 mx-8'>
                <img src={img} alt={img} className='object-cover border-t-12 h-[12rem]'/>
                <div className='py-8 px-4 border-b-1'>
                    <h3 className=' text-gray-900 text-2xl font-bold mb-4'>ویزای توریستی {name}</h3>
                    <span className=' text-gray-700 text-lg'>
                        زمان پردازش 
                        : 
                        {time}
                    </span>
                </div>
                <div className='flex justify-between items-center py-8 px-4'>
                    <span className='text-xl text-gray-700'>شروع قیمت از :</span>
                    <div className='flex items-center'>
                        <span className=' text-sky-600 text-2xl p-1'>{price}</span>
                        <span className=' text-gray-700 text-lg'>یورو / نفر</span>
                    </div>
                </div>
            </div>
        </div>
    );
}


