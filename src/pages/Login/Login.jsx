import React, { useRef, useState, useEffect } from "react";
import { NavBar, Footer } from "./../../components";
import { MainLogo } from "../../components/Icons/MainLogo";
import SvgLogin from "./SvgLogin";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Link } from "react-router-dom";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const phoneInput = useRef(null);
  const sendBtn = useRef(null);
  const erorr = useRef(null);

  const isValid = (number) => {
    if (number.length > 10 && !number.includes(" ")) {
      if (number[0] === 0 && number[1] === 9) {
        return true;
      }
      erorr.current.textContent = "شماره مبایل باید با 0 و 9 شروع شده باشد .";
      return false;
    }
    erorr.current.textContent = "شماره مبایل باید 10 رقم باشد .";
    return false;
  };

  useEffect(() => {
    if (isValid(phoneNumber)) {
      erorr.current.classList.remove("text-red-500");
      erorr.current.textContent = "";
      phoneInput.current.classList.remove("border-red-erorr");
      sendBtn.current.classList.remove("bg-[#79b8ec]");
      sendBtn.current.classList.add("bg-[#1998ff]");
    } else {
      erorr.current.classList.add("text-red-500");
      phoneInput.current.classList.add("border-red-erorr");
      sendBtn.current.classList.remove("bg-[#1998ff]");
      sendBtn.current.classList.add("bg-[#79b8ec]");
    }
  }, [phoneNumber]);

  useEffect(() => {
    erorr.current.textContent = "";
    phoneInput.current.classList.remove("border-red-erorr");
    sendBtn.current.classList.add("bg-[#79b8ec]");
  }, []);

  return (
    <div className="">
      <NavBar />
      <div className="flex justify-center md:p-20">
        <div className="md:flex md:border-2 border-12 md:p-20 max-w-[1600px]">
          <div className=" hidden md:block md:w-1/2 mr-4">
            <SvgLogin />
            <h2 className="text-4xl my-16 text-center">علی باب رتبه یک سفر</h2>
            <p className="text-2xl text-gray-700 text-center dr-rtl">
              برای خرید آسان و امن و مشاهده تخفیف‌های ویژه علی‌بابا، عضو شوید.
            </p>
          </div>
          <div className="flex flex-col items-center justify-between h-[100vh] md:h-auto pt-[100px] md:pt-10 dr-rtl w-full md:w-1/2 md:border-l ml-4">
            <div className="w-full flex flex-col px-10">
              <div className=" block md:hidden">
                <MainLogo />
              </div>
              <h1 className="text-4xl text-center my-20">ورود یا ثبت نام</h1>
              <p className="mb-10">برای ادامه مبایل خود را وارد کنید.</p>
              <div className="w-full flex flex-col mb-5 md:mb-20">
                <div
                  className="relative mb-3 dr-rtl md:mb-10"
                  data-twe-input-wrapper-init
                >
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full border-12 border-1 p-6 text-right leading-[1.6]  text-xl outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary"
                    id="exampleFormControlInput50"
                    placeholder="+98"
                    ref={phoneInput}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  <label
                    htmlFor="exampleFormControlInput50"
                    className="pointer-events-none absolute left-3 top-1 px-5 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] bg-white text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                  >
                    شماره مبایل
                  </label>
                </div>
                <p ref={erorr} className="text-red-500"></p>
              </div>
              <div className="flex items-center">
                <HelpOutlineIcon style={{ fontSize: "2rem" }} />
                <p className="flex items-center">
                  استفاده از علی‌بابا به معنی پذیرش
                  <Link className="text-sky-600 px-1">قوانین و مقررات</Link>
                  این سرویس است.
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col items-center mt-20">
              <button
                ref={sendBtn}
                className="p-10 text-2xl transition-all border-12 text-white w-[90%]"
              >
                تایید و دریافت کد{" "}
              </button>
              <div className="flex justify-center p-10">
                <Link className="text-lg text-sky-600">ورود با کبمه عبور</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" hidden md:block">
        <Footer />
      </div>
    </div>
  );
};

export default Login;
