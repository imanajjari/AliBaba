import React from 'react';
import { NavBar , Footer } from '../../components'
import { Link } from 'react-router-dom'
import img from '../../images/404-alibaba-a830dd70.png'

const NotFound = () => {
    return (
        <div>
            <NavBar />
                <div className='flex flex-col items-center justify-center h-[50vh] dr-rtl'>
                    <img src={img} alt="not found" className='mb-10 w-1/2 xl:w-1/3'/>
                    <h1 className='text-2xl xl:text-5xl mb-10'>صفحه مورد نظر در دسترس نمی‌باشد</h1>
                    <Link to="/" className='text-xl max-w-[400px] text-gray-600 md:max-w-none'>
                    متاسفانه خطایی هنگام انتقال درخواست شما رخ داده است
                    برای پیدا کردن مسیر درست میتوانید سری به صفحه اول علی‌بابا بزنید
                    </Link>
                </div>
                <div className=' hidden sm:block'>
                    <Footer />
                </div>
        </div>
    );
}

export default NotFound;
