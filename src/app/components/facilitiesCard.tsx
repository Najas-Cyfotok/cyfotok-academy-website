import Image from "next/image";
import React from "react";
import ShineBorder from "@/components/ui/shine-border";

type FacilitiesCardProps = {
    imgUrl: string;
    title: string;
    description: string
}
const FacilitiesCard = ({imgUrl, title, description}: FacilitiesCardProps) => {
  return (
    <ShineBorder color={["#A07CFE", "#FE8FB5", "#FFBE7B"]} className="bg-white/60">
      <div className=" px-5 py-3 flex flex-col gap-y-3 h-[250px] hover:scale-100 scale-95 duration transition">
        <Image
          alt={title}
          src={imgUrl}
          width={200}
          height={200}
          className="w-20 h-20 bg-gradient-to-r from-pink-500 to-rose-500 p-3 rounded-3xl text-white "
        />
        <p className="font-semibold text-3xl">{title}</p>
        <p className="text-black/80 text-lg">{description.slice(0, 200)}</p>
      </div>
    </ShineBorder>
  );
};

export default FacilitiesCard;
