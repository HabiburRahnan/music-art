import { WavyBackground } from "./ui/wavy-background";


const Instractors = () => {
    return (
        <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
         <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
         <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
       Meet Our Instructors
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
      Discover the talented professionals who will guide your musical journey
      </p>
            </WavyBackground> 
        </div>
    );
};

export default Instractors;