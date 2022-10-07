import React, { FC } from "react";
import { Dropdown } from "../Dropdown";
import Divider from "../../assets/divider.svg";

const containerStyles = 
"w-[20rem] h-screen flex flex-col grow bg-gradient-to-t from-[#590e40] to-[#2C061F] items-center hidden lg:hide-on-mobile";

const buttonStyles = "dark-3 rounded-md m-4 p-2 hover:bg-[#E1D89F] text-black";

export const SideBar: FC = () => {
  return (
    <div className={containerStyles}>
      Workit
      <Divider />
      <div>search here</div>
      <div>filter by: </div>
      <div className="m-4 flex flex-col items-end">
        <div className="flex flex-row items-center mb-2">
          Work: <Dropdown />
        </div>
        <div className="flex flex-row items-center mb-2">
          Looking for: <Dropdown />
        </div>
        <div className="flex flex-row items-center mb-2">
          Language: <Dropdown />
        </div>
        <div className="flex flex-row items-center mb-2">
          Location: <Dropdown />
        </div>
      </div>
      <button className={buttonStyles}>Show Results</button>
    </div>
  );
};
