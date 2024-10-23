import React, { useEffect, useRef, useState } from "react";
import { Footer, NavBar, QA } from "../../components";
import LuggageIcon from "@mui/icons-material/Luggage";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import CallIcon from "@mui/icons-material/Call";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { questionsHelpData } from "../../data/data";

const HelpCenter = () => {
  const searchInput = useRef("");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setQuestions(questionsHelpData);
  }, []);

  const searchHandler = () => {
    const newQuestion = questionsHelpData.filter((question) =>
      question.title.includes(searchInput.current)
    );
    setQuestions(newQuestion);
  };
  return (
    <div>
      <NavBar />
      <div className="relative flex justify-center mb-[300px] xl:mb-[350px]">
        <div className="h-[150px] xl:h-[300px] bg-[#FDB713] w-full"></div>
        <div
          className="absolute max-w-[1400px] bg-white w-[90%] top-[80%] border-12 border-2 border-slate-300 dr-rtl
                    box-shadow xl:py-20"
        >
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-5xl text-gray-800 p-8">
              مرکز پشتیبانی آنلاین علی بابا
            </h1>
            <p className="text-2xl text-gray-500 p-8">
              چطور می‌توانیم کمکتان کنیم؟
            </p>
            <div className="flex flex-col items-center md:flex-row justify-center w-full md:my-10">
              <input
                type="text"
                onChange={(e) => {
                  searchInput.current = e.target.value;
                }}
                className="border-1 border-12 text-2xl p-4 w-[90%] md:w-[70%] md:h-1/2 xl:h-full my-10 text-gray-600 md:ml-5 md:my-0"
                placeholder="جست و جو راهنمایی استرداد ، خرید بلیط و ..."
              />
              <button
                onClick={searchHandler}
                className="bg-[#FDB713] p-4  text-gray-800 w-[90%] md:w-[20%] md:h-1/2 xl:p-5 text-2xl mb-4 border-12"
              >
                جست و جو
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="px-20 md:flex justify-center">
        <div className="flex justify-between items-center dr-rtl border-1 border-12 p-6  transition-all m-4 lg:w-full lg:w-[300px] xl:w-[350px] box-shadow-hover cursor-pointer">
          <div>
            <LuggageIcon style={{ fill: "#989898FF", fontSize: "3rem" }} />
          </div>
          <div>
            <h3 className="text-2xl mb-4">سفر های من</h3>
            <p className="text-lg text-gray-600">
              دانلود بلیط استرداد یا کنسلی
            </p>
          </div>
          <div>
            <ArrowBackIosNewIcon
              style={{ fill: "#989898FF", fontSize: "2rem" }}
            />
          </div>
        </div>
        <div className="flex justify-between items-center dr-rtl border-1 border-12 p-6  transition-all m-4 lg:w-full lg:w-[300px] xl:w-[350px] box-shadow-hover cursor-pointer">
          <div>
            <SupportAgentIcon style={{ fill: "#989898FF", fontSize: "3rem" }} />
          </div>
          <div>
            <h3 className="text-2xl mb-4">درخواست پشتیبانی</h3>
            <p className="text-lg text-gray-600">
              ثبت درخواست تغییرات در بیلیط
            </p>
          </div>
          <div>
            <ArrowBackIosNewIcon
              style={{ fill: "#989898FF", fontSize: "2rem" }}
            />
          </div>
        </div>
        <div className="flex justify-between items-center dr-rtl border-1 border-12 p-6  transition-all m-4 lg:w-full lg:w-[300px] xl:w-[350px] box-shadow-hover cursor-pointer">
          <div>
            <CallIcon style={{ fill: "#989898FF", fontSize: "3rem" }} />
          </div>
          <div>
            <h3 className="text-2xl mb-4">خدمات تلفنی</h3>
            <p className="text-lg text-gray-600">مشاوره و ارتباط پشتیانی</p>
          </div>
          <div>
            <ArrowBackIosNewIcon
              style={{ fill: "#989898FF", fontSize: "2rem" }}
            />
          </div>
        </div>
      </div>
      <div className="px-20 mt-20 mb-[200px]">
        <QA questions={questions} />
      </div>
      <Footer />
    </div>
  );
};

export default HelpCenter;
