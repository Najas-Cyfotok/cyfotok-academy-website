import { coursesData } from "@/app/assets/courses";
import PagePath from "@/app/components/page-path";
import CourseDetails from "@/app/sections/CourseDetails";
import { Metadata } from "next";

type Props = {
  params: {
    course: string;
  };
};
type CourseDetailPageProp = {
  params: {
    slug: string;
  };
};
export async function generateMetadata({
  params,
}: CourseDetailPageProp): Promise<Metadata> {
  //getting params and filtering data
  const title = coursesData.filter((course) => course.id === params.slug);
  return {
    //after filtering data setting title
    title: title[0].title,
  };
}
const CourseDetailPage = ({ params }: CourseDetailPageProp) => {
  // console.log(params);
  const filteredCourse = coursesData.filter(
    (course) => course.id === params.slug
  );

  return (
    <main className="mt-28 px-3">
      <PagePath
        category={filteredCourse[0].category}
        param={filteredCourse[0].title}
      />
      <CourseDetails params={params} />
    </main>
  );
};

export default CourseDetailPage;
