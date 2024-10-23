import React from 'react';
import { NavBar , Footer } from '../../components'
import { Avatar } from '../../components/Icons/Avatar'
import { Button } from '../../components/profile/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import GppGoodIcon from '@mui/icons-material/GppGood';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import EditIcon from '@mui/icons-material/Edit';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
const Profile = () => {
    return (
        <div>
            <NavBar />
                <div className='flex flex-col items-center bg-slate-100 dr-rtl h-[70vh]'>
                    <div className='max-w-[1300px] flex flex-col items-center w-full p-2 lg:py-4'>
                        <div className='bg-white border-12 border-1 w-full flex justify-between p-8  mb-4'>
                            <div className='flex items-center justify-center'>
                                <Avatar />
                                <p className='text-xl px-6 lg:text-3xl'>09393033001</p>
                            </div>
                            <div className='felx flex-col items-center justify-center'>
                                <p className='text-xl lg:text-2xl'>موجودی حساب</p>
                                <p className='text-xl text-gray-700 py-2 lg:text-2xl lg:py-4'>0تومان</p>
                                <Button>
                                    افزایش موجودی
                                    <ArrowBackIosNewIcon />
                                    </Button>
                            </div>
                        </div>
                        <div className='bg-white border-12 border-1 w-full p-8 mb-4'>
                            <div className='flex justify-between mb-8'>
                                <div className='flex items-center justify-center'>
                                    <p className='text-xl px-6 lg:text-3xl'>اطلاعات حساب کاربری <HowToRegIcon fontSize='large'  /></p>
                                </div>
                                <div className='felx flex-col items-center justify-center'>
                                    <Button>حساب کاربری علی‌بابا پلاس <GppGoodIcon fontSize='large' /></Button>
                                </div>
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='flex justify-center items-center'>
                                    <p className='lg:text-2xl m-4'>شماره موبایل</p>
                                    <p className='lg:text-2xl m-4 text-gray-600'>09393033001</p>
                                    <p className='lg:text-2xl m-4 p-2 text-green-800 bg-green-200 border-12'>
                                    تایید شده
                                    <CheckCircleOutlineIcon />
                                    </p>
                                    <Button>ویرایش
                                        <EditIcon />
                                    </Button>
                                </div>
                                    <button className='text-[#0077DB] hover:bg-[#F2F9FF] border border-[#0077DB] border-12 transition-all lg:text-2xl p-2'>
                                        <VpnKeyIcon fontSize='large'/>
                                        ویرایش کلمه عبور
                                    </button>
                            </div>

                        </div>
                        
                    </div>
                </div>
            <Footer />
        </div>
    );
}

export default Profile;
