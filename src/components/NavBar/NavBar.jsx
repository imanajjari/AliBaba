import React, { memo } from 'react';
import { Link } from 'react-router-dom'
import { MainLogo } from '../Icons/MainLogo';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LuggageIcon from '@mui/icons-material/Luggage';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

export const NavBar = memo(() => {
    return (
        <div className='hidden sm:flex py-10 px-10 justify-between items-center xl:px-20 border-b-1 box-shadow'>

                <div className='flex'>
                    <Link to="/login">
                        <div className='md:text-lg md:px-4  xl:text-2xl'>
                            مرکز پشتیبانی انلاین
                            <HelpOutlineIcon fontSize='large' />
                        </div>
                    </Link>
                    <Link to="/login">
                        <div className='md:text-lg px-4 xl:text-2xl'>
                            سفر های من
                            <LuggageIcon fontSize='large' />
                        </div>
                    </Link>
                    <Link to="/login">
                        <div className='md:text-lg md:px-4 xl:text-2xl'>
                            ورود یا ثبت نام
                            <PermIdentityIcon fontSize='large' />
                        </div>
                    </Link>
                </div>
                <div className=' hidden md:flex'>
                    <Link to="/visa">
                        <div className='text-lg px-4 text-gray-500   md:text-xl md:px-6 xl:text-3xl'>
                            ویزا
                        </div>
                    </Link>
                    <Link to="/visa">
                        <div className='text-lg px-4 text-gray-500 border-l-gray-600 border-l-1 md:text-xl md:px-6 xl:text-3xl'>
                            اقامت گاها
                        </div>
                    </Link>
                    <Link to="/help-center">
                        <div className='text-lg px-4 text-gray-500 border-l-gray-600 border-l-1 md:text-xl md:px-6 xl:text-3xl'>
                                پشتیبانی  
                        </div>
                    </Link>
                </div>
                <Link to="/">
                    <div><MainLogo /></div>
                </Link>
            </div>
    );
});