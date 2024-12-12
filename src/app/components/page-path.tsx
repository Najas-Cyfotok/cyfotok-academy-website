import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";

type PathProps = {
  param: string;
  subParams?: string;
  category?: string;
};
const PagePath = ({ param, subParams, category }: PathProps) => {
  return (
    <div className="flex items-center gap-2">
      <Link href={'/courses/all'}>
      <Home className="w-5 h-5 mb-1 text-black/70" />
      </Link>
      {category && (
        <>
          <ChevronRight className="w-5 h-5 text-black/70" />
          <p className="text-black/70 font-semibold">{category}</p>
        </>
      )}
      <p className="text-black/70 font-semibold">Courses</p>
      {param && (
        <div className="max-sm:hidden flex items-center gap-2">
          <ChevronRight className="w-5 h-5 text-black/70" />
          <p className="text-black/80 font-semibold">{param}</p>
        </div>
      )}
      {subParams && (
        <>
          <ChevronRight className="w-5 h-5 text-black/70" />
          <p className="text-black/80 font-semibold">{subParams}</p>
        </>
      )}
    </div>
  );
};

export default PagePath;
