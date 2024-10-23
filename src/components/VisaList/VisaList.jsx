import React from 'react';
import { VisaCard } from './VisaCard'

const VisaList = ({visasList}) => {

    return (
        <div className='mb-10 flex justify-center '>
            {!visasList ?
                (<div className='flex justify-center w-full'>
                    <h2 className='my-20 text-center text-3xl'>برای این عنوان نتیجه ای یافت نشد .</h2>
                </div>)
            :
                <div className='grid grid-cols-2 md:grid-cols-3 md:gap-y-5 xl:grid-cols-4 xl:gap-y-8 max-w-[1270px]'>
                    {visasList.map(visa => 
                    <VisaCard 
                    key={visa.id}
                    name={visa.name} 
                    img={visa.img} 
                    time={visa.time} 
                    price={visa.price} 
                    /> )}
                </div>
            }
        </div>
    );
}

export {VisaList}

