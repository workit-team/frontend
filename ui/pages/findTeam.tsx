import type { NextPage } from "next";
import React from "react";
import { Layout } from "../components/Layout";
import { Pagination } from "../components/Pagination";
import { SideBar } from "../components/SideBar";
import { TeamItem } from "../components/TeamItem";

const data = {
  profileId: 45,
  name: "GreatTeam",
  members: 4,
  location: "international",
  workType: ["web development"],
  lookingFor: ["frontend dev", "graphic designer"],
  languages: ["english", "spanish"],
  teamAge: "6 months",
  recruiting: true,
};

const dataArr = [data, data, data, data];

const FindTeam: NextPage = () => {
  return (
    <div className="mt-[3.5rem]">
      <Layout>
        <div className="flex flex-row w-full h-full ">
          <SideBar />
          <div className="flex flex-col h-full w-full items-center">
            {dataArr.map((team, index) => {
              return (
                <TeamItem
                  key={index}
                  name={team.name}
                  languages={team.languages}
                  recruiting={team.recruiting}
                  lookingFor={team.lookingFor}
                  members={team.members}
                  workType={team.workType}
                  teamAge={team.teamAge}
                  profileId={team.profileId}
                  location={team.location}
                />
              );
            })}
            <Pagination pages={10} currPage={2} />
          </div>
        </div>

        
      </Layout>
    </div>
  );
};

export default FindTeam;
