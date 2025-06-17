import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/ProfileImage.jpg";  // Ensure this is the correct path to Aayush's profile picture
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 -mt-12">
      {/* Added negative margin here */}
      <div className="flex flex-wrap">
        {/* Left Section - Text */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-12 lg:text-6xl"
            >
              {/* Reduced mt-16 to mt-12 */}
              Banti Kumar Das
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Software Engineer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* Right Section - Profile Image */}
        <div className="w-full lg:w-1/2 lg:p-8 flex justify-center">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            src={profilePic}
            alt="Banti Kumar Ds"
            className="w-full h-auto max-w-[180px] md:max-w-[250px] lg:max-w-[300px] object-cover"
            style={{ height: 'auto', marginTop: '-20px' }} // Added negative margin to move the image upwards
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
