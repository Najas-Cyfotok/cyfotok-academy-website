import Image from "next/image";
import React from "react";
import { teamWork } from "../assets/assets";

const CompanyAbout = () => {
  return (
    <section className="flex items-center justify-between bg-black/80 text-white">
      <div className="flex flex-col gap-y-6 w-2/4 p-5">
        <h1 className="text-6xl font-thin"><span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-rose-500 font-semibold">Cyfotok</span> for Teams</h1>
        <p className="text-balance font-thin">
          Upskill your team with Cyfotok Academy’s suite of cybersecurity
          training, learning activities, and management tools, including
          hands-on Virtual Labs, role-aligned Career Paths, and personalized
          remediation. Request a demo and learn how Cyfotok Academy tailors our
          deep library of training to your team’s unique needs.
        </p>
      </div>
      <div className="w-2/4">
        <Image src={teamWork} alt="teamWork" width={1080} height={1080} className="rounded-1g"/>
      </div>
    </section>
  );
};

export default CompanyAbout;
