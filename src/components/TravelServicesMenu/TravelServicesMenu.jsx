import React from "react";
import TrainIcon from "@mui/icons-material/Train";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import DirectionsBusFilledIcon from "@mui/icons-material/DirectionsBusFilled";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import BackpackIcon from "@mui/icons-material/Backpack";
import VillaIcon from "@mui/icons-material/Villa";

export const TravelServicesMenu = () => {
  return (
    <div
      className="absolute bg-white w-[75%] grid  grid-cols-2  top-[40%] border-12 border-2 border-slate-300 dr-rtl
                sm:w-full sm:grid-cols-6 sm:top-[90%] md:max-w-[1024px] md:p-8 box-shadow"
    >
      <div className="flex text-right p-8 items-center sm:justify-center border-l-1-sm cursor-pointer">
        <TrainIcon style={{ fill: "#FDB913", fontSize: "4rem" }} />
        <p className="text-xl px-2 md:text-2xl">قطار</p>
      </div>
      <div className="flex text-right p-8 items-center sm:justify-center border-l-1-sm cursor-pointer">
        <AirplanemodeActiveIcon style={{ fill: "#FDB913", fontSize: "4rem" }} />
        <p className="text-xl px-2 md:text-2xl">پرواز</p>
      </div>
      <div className="flex text-right p-8 items-center sm:justify-center border-l-1-sm cursor-pointer">
        <DirectionsBusFilledIcon
          style={{ fill: "#FDB913", fontSize: "4rem" }}
        />
        <p className="text-xl px-2 md:text-2xl">اتوبوس</p>
      </div>
      <div className="flex text-right p-8 items-center sm:justify-center border-l-1-sm cursor-pointer">
        <LocationCityIcon style={{ fill: "#FDB913", fontSize: "4rem" }} />
        <p className="text-xl px-2 md:text-2xl">هتل</p>
      </div>
      <div className="flex text-right p-8 items-center sm:justify-center border-l-1-sm cursor-pointer">
        <BackpackIcon style={{ fill: "#FDB913", fontSize: "4rem" }} />
        <p className="text-xl px-2 md:text-2xl">تور</p>
      </div>
      <div className="flex text-right p-8 items-center sm:justify-center cursor-pointer">
        <VillaIcon style={{ fill: "#FDB913", fontSize: "4rem" }} />
        <p className="text-xl px-2 md:text-2xl">ویلا</p>
      </div>
    </div>
  );
};
