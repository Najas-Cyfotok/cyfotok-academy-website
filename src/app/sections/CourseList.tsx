import { coursesData } from "../assets/courses";
import Courses from "../components/courses";


const CourseList = () => {


  // console.log(course);

  return (
    <section>
      <div className="flex items-center justify-center gap-5">
        <Courses course={coursesData} />
      </div>
    </section>
  );
};

export default CourseList;
