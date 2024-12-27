import { coursesData } from "@/app/assets/courses";
import Testimonials from "@/app/sections/Home/Testimonials";
import TrainingFacilities from "@/app/sections/Home/TrainingFacilities";
import SkillCourse from "@/app/sections/Skills/SkillCourse";
import TeamWorkBG from "@/app/sections/Skills/TeamWorkBG";
import { Metadata } from "next";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  return {
    title: `Skills | ${slug} - Cyfotok Academy`,
  };
}
const SkillsPage = ({ params }: Props) => {
  const slug = params.slug;
  const data = coursesData.filter((course) => course.subpage == slug);
  //   console.log(data);

  return (
    <main className="mt-28 mx-3">
      <SkillCourse data={data} />
      <TeamWorkBG />
      <TrainingFacilities />
      <Testimonials />
    </main>
  );
};

export default SkillsPage;
