import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Master the Art of Music</h1>
        <p className="">
          Dive into our comprehensive music course and transfrom your musical
          journey today. Whether you're a beginner or looking to refine your
          skills, join us to unlock your true potential.
        </p>
        <div className="mt-4">
          <Link href="/courses">Expore Courses</Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
