import React, { useState } from "react";
import { Footer, NavBar, VisaList, QA } from "./../../components";
import { questionsVisaData, visasData } from "./../../data/data";

const Visa = () => {
  const [visasFiltered, setVisasFiltered] = useState(visasData);
  const [input, setInput] = useState("");

  const searchInput = () => {
    const newVisa = visasData.filter((visa) => visa.name.toLowerCase().includes(input.toLowerCase()));
    setVisasFiltered(newVisa);
  };

  return (
    <div>
      <NavBar />
      <div className="relative flex justify-center mb-[250px] ">
        <div >
          <img
            className="h-[150px] xl:h-[400px] object-cover"
            src="/images/bg-visa-mobile.webp"
            alt="Flight"
          />
        </div>
        <div
          className="absolute max-w-[1400px] bg-white w-[90%] top-[80%] border-12 border-2 border-slate-300 dr-rtl
                    box-shadow xl:py-20"
        >
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-5xl text-gray-800 p-8">ویزای سفری</h1>
            <div className="flex flex-col items-center md:flex-row justify-center w-full md:my-10">
              <input
                type="text"
                onChange={(e) => {
                  setInput(e.target.value);
                }}
                className="border-1 border-12 text-2xl p-4 w-[90%] md:w-[70%] md:h-1/2 xl:h-full my-10 text-gray-600 md:ml-5 md:my-0"
                placeholder="کشور مقصد"
              />
              <button
                onClick={searchInput}
                className="bg-[#FDB713] text-gray-800 w-[90%] md:w-[20%] md:h-1/2 p-5 text-2xl mb-4 border-12"
              >
                جست و جو
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="px-10 dr-rtl">
        {input ? (
          <h2 className="my-20 text-center text-3xl">
            نتایج جست و جو برای {input}
          </h2>
        ) : (
          ""
        )}
        <VisaList visasList={visasFiltered} />
      </div>
      <div className="px-20 flex justify-center mt-10 md:mt-[80px]">
        <div className="max-w-[1400px] md:flex items-center">
          <div className="p-8">
            <img
              src="/images/visa/whats_visa_8aa91c7562.png"
              alt="whats visa"
            />
          </div>
          <div className="dr-rtl mb-10">
            <h2 className="text-5xl mb-8">ویزا چیست؟</h2>
            <p className="text-2xl text-gray-800">
              اگر عازم سفر خارجی باشید، حتما با ویزا سروکار خواهید داشت. ما
              اینجا درباره این صحبت می‌کنیم که ویزا دقیقا چیست و چرا برای سفر به
              کشورهای خارجی باید آن را درخواست کرد؟
            </p>
            <p className="text-2xl text-gray-800">
              برای پاسخ به سوال «ویزا چیست؟» و فهم بهتر آن با یک مثال پیش
              می‌رویم. تصور کنید می‌خواهید به خانه کسی بروید. در قدم اول چه کار
              می‌کنید؟ طبیعتا از صاحب‌خانه اجازه می‌گیرید؛ چون ورود به هر
              خانه‌ای، بدون اجازه صاحب‌خانه‌اش ممکن نیست. ویزا هم به‌نوعی اجازه
              صاحب‌خانه محسوب می‌شود.
            </p>
            <p className="text-2xl text-gray-800">
              ویزا یک مجوز است؛ مجوزی برای سفر به کشورهای خارجی. هر مسافری که
              بخواهد به کشوری خارجی سفر کند، در وهله اول باید از آن کشور اجازه
              بگیرد؛ یعنی به سفارت‌خانه کشور مقصدش مراجعه و درخواست ویزای آنجا
              را می‌کند. اگر شما هم قصد سفر به کشورهای خارجی را دارید و
              می‌خواهید اطلاعات بیشتری درباره آن کسب کنید، این مطلب را تا انتها
              بخوانید.
            </p>
          </div>
        </div>
      </div>

      <div className="px-20 flex justify-center mt-10 md:mt-[80px]">
        <div className="max-w-[1400px] md:flex items-center">
          <div className="dr-rtl mb-10">
            <h2 className="text-5xl mb-8">هزینه گرفتن ویزا</h2>
            <p className="text-2xl text-gray-800">
              اگر عازم سفر خارجی باشید، حتما با ویزا سروکار خواهید داشت. ما
              اینجا درباره این صحبت می‌کنیم که ویزا دقیقا چیست و چرا برای سفر به
              کشورهای خارجی باید آن را درخواست کرد؟
            </p>
            <p className="text-2xl text-gray-800">
              برای پاسخ به سوال «ویزا چیست؟» و فهم بهتر آن با یک مثال پیش
              می‌رویم. تصور کنید می‌خواهید به خانه کسی بروید. در قدم اول چه کار
              می‌کنید؟ طبیعتا از صاحب‌خانه اجازه می‌گیرید؛ چون ورود به هر
              خانه‌ای، بدون اجازه صاحب‌خانه‌اش ممکن نیست. ویزا هم به‌نوعی اجازه
              صاحب‌خانه محسوب می‌شود.
            </p>
            <p className="text-2xl text-gray-800">
              ویزا یک مجوز است؛ مجوزی برای سفر به کشورهای خارجی. هر مسافری که
              بخواهد به کشوری خارجی سفر کند، در وهله اول باید از آن کشور اجازه
              بگیرد؛ یعنی به سفارت‌خانه کشور مقصدش مراجعه و درخواست ویزای آنجا
              را می‌کند. اگر شما هم قصد سفر به کشورهای خارجی را دارید و
              می‌خواهید اطلاعات بیشتری درباره آن کسب کنید، این مطلب را تا انتها
              بخوانید.
            </p>
          </div>
          <div className="p-8">
            <img
              src="/images/visa/cost_440833f7dd.png"
              alt="whats visa"
            />
          </div>
        </div>
      </div>
      <div className="px-20 mt-20 pb-20">
        <QA questions={questionsVisaData} />
      </div>
      <Footer />
    </div>
  );
};

export default Visa;
