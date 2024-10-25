import React from "react";

import {
  ServisIcons,
  MobilApp,
  QA,
  Slider,
  Footer,
  NavBar,
  TravelServicesMenu,
} from "../../components";
import { BlackLogo } from "../../components/Icons/BlackLogo";
import { slider, questionsHomeData } from "../../data/data";

import baner from "../../images/baner-home.jpg";

const Home = () => {
  return (
    <div>
      <div className="hidden sm:block">
        <NavBar />
      </div>
      <div className="homepage-bg relative flex justify-center mb-[150px]">
        <img
          className="hidden sm:block"
          src={baner}
          alt="Flight"
          height="320"
        />
        <BlackLogo />
        <TravelServicesMenu />
      </div>
      <div>
        <div className="dr-rtl px-16 text-2xl sm:w-full xl:px-[160px]">
          <h2 className="xl:text-4xl">سایر خدمات علی بابا</h2>
          <ServisIcons />
        </div>
        <div className="mt-8 px-16 sm:px-0 xl:px-[160px]">
          <img
            src="/images/bg-tele.webp"
            alt="bg-tele"
            className=" block sm:hidden border border-slate-300 border-12"
          />
          <img
            src="/images/HomeSmTele.webp"
            alt="bg-tele"
            className=" hidden sm:block border border-slate-300 border-12"
          />
        </div>
        <div className="px-16 sm:px-0 flex justify-center xl:px-[160px]">
          <Slider images={slider} />
          {/* Slide bar for size 768px and later. */}
          <div className=" hidden md:block">
            <Slider images={slider} />
          </div>
        </div>
        <div className="px-16 xl:px-[160px]">
          <MobilApp />
        </div>
        <div className="mt-12 px-16 xl:px-[160px] xl:mt-[100px]">
          <QA questions={questionsHomeData} />
        </div>
        <div className="mt-12 px-16 xl:px-[160px] xl:mt-[100px] xl:mb-[160px]">
          <div className="dr-rtl">
            <h2 className="text-4xl mb-4 md:text-6xl xl:text-8xl">
              بلیط هواپیما
            </h2>
            <p className="text-gray-600 md:text-xl md:mt-10 xl:text-3xl ">
              علی‌بابا بزرگترین و معتبرترین سایت خرید اینترنتی بلیط هواپیما ،
              قطار و اتوبوس در کشور است که از سال ۱۳۹۳ کار خود را شروع کرده و در
              این مدت توانسته رضایت درصد قابل توجهی از کاربران را به دست بیاورد.
              در ابتدا، فروش بلیط پرواز داخلی در دستور کار علی‌بابا قرار داشت؛
              اما به مرور امکان خرید سایر محصولات گردشگری نیز به علی‌بابا اضافه
              شد.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
