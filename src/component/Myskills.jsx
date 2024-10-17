import { motion } from "framer-motion";

const Technologies = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className="border-b border-neutral-900 pb-4">
      {/* Container with more space between sections */}
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between items-start gap-10 p-10">
        {/* Left Section: Header and Description */}
        <div className="w-full md:w-1/3 text-left">
          <motion.h2 
            className="text-2xl font-semibold text-blue-400 mb-4"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Favourite <span className="text-white">Skills</span>
          </motion.h2>
          <motion.h3 
            className="text-5xl font-extrabold mb-6"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            My Skills
          </motion.h3>
          <motion.p 
            className="text-lg mb-8 leading-relaxed"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Below is a list of skills that I have applied in various projects over the past few years. This includes DSA and Web Development.
          </motion.p>
        </div>

        {/* Right Section: Skills List */}
        <div className="w-full md:w-2/3">
          <motion.div 
            className="grid grid-cols-2 gap-6 text-xl"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Left column of skills */}
            <div className="space-y-4">
              {[
                "01. C/C++",
                "02. DSA",
                "03. Java",
                "04. Python",
                "05. JavaScript",
                "06. MySQL",
                "07. MongoDB"
              ].map(skill => (
                <motion.li 
                  key={skill}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  className="hover:text-blue-400 transition duration-200"
                >
                  {skill}
                </motion.li>
              ))}
            </div>

            {/* Right column of skills */}
            <div className="space-y-4">
              {[
                "08. HTML & CSS",
                "09. ReactJS",
                "10. ReduxJS",
                "11. NodeJS",
                "12. ExpressJS",
                "13. Excel, PowerBI",
                "14. Git & GitHub"
              ].map(skill => (
                <motion.li 
                  key={skill}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  className="hover:text-blue-400 transition duration-200"
                >
                  {skill}
                </motion.li>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
