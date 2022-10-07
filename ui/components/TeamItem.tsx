import React, { FC } from "react";
import getUnicodeFlagIcon from "country-flag-icons/unicode";

const containerStyles =
  "flex flex-row w-full items-center p-2 h-[5rem] border-b-2 border-black table-item";

const textStyles = "text-xs";

const nameStyles = "mr-2 justify-start grow text-2xl";

const sectionStyles = "flex flex-col justify-center items-center mr-4";



type Props = {
    profileId: number,
    name: string,
    members: number,
    location: string,
    workType: string[],
    lookingFor: string[],
    languages: string[],
    teamAge: string,
    recruiting: boolean
}



export const TeamItem: FC<Props> = ({
    profileId, 
    name, 
    members, 
    location,
    workType,
    lookingFor,
    languages,
    teamAge,
    recruiting
}) => {

    const parseStringArr = (strArr: string[]) => {
        let returnStr = "";
        strArr.map((str, index) => {
          if (index !== strArr.length - 1) {
            returnStr += str + ", ";
          } else {
            returnStr += str;
          }
        });
        return returnStr;
      };


  return (
    <div className={containerStyles}>
      <div className="mr-2">&#127760;</div>
      {/* {getUnicodeFlagIcon('')} */}
      <h1 className={nameStyles}>{name}</h1>
      <div className="flex flex-row justify-end">
        <div className={sectionStyles}>
          Work:
          <p className={textStyles}>{parseStringArr(workType)}</p>
        </div>
        <div className={sectionStyles}>
          Members:
          <p className={textStyles}>{members}</p>
        </div>
        <div className={sectionStyles}>
          Language(s):
          <p className={textStyles}>{parseStringArr(languages)}</p>
        </div>
        <div className={sectionStyles}>
          Looking for:
          <p className={textStyles}>{parseStringArr(lookingFor)}</p>
        </div>
        <div className={sectionStyles}>
          Currently recruiting:
          <p className={textStyles}>{recruiting ? "Yes" : "No"}</p>
        </div>
      </div>
    </div>
  );
};
