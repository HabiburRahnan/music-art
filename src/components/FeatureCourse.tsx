import Link from "next/link";
import courseData from "../data/music-data.json";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;

}
const FeatureCourse = () => {
  courseData.courses.filter((course:Course) => course.isFeatured);

  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURE COURSE
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With Best
          </p>
        </div>
      </div>

      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          text
        </div>
      </div>

      <div className="mt-20 text-center">
        <Link
          href="/courses"
          className="px-4 py-2 rounded-md border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 translation duration-200"
        >
          View All Crouse
        </Link>
      </div>
    </div>
  );
};

export default FeatureCourse;