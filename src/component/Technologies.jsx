// import {RiReactjsLine} from "react-icons/ri" ; 
// import {TbBrandNextjs} from "react-icons/tb" ; 
// import {SiMongodb} from "react-icons/si" ; 
// import {FaNodeJs} from "react-icons/fs" ; 
// import {BiLogoPostgresql} from "react-icons/bi" ; 
// //import {RiReactjsLine} from "react-icons/" ; 
 
// const Technologies = () => {
//   return (
//     <div className="border-b border-neutral-800 pb-24">
//      <h2 className="my-20 text-center text-4xl"> Technologies </h2>
//      <div className= "flex flex-wrap items-center justify-center gap-4">
//   <div className="rounded-2xl border-4 border-neutral-800 p-4">
//  <RiReactjsLine className="text-7xl text-cyan-400" />
//   </div>

//   <div className="rounded-2xl border-4 border-neutral-800 p-4">
//  <TbBrandNextjs className="text-7xl text-cyan-400" />
//   </div>

//   <div className="rounded-2xl border-4 border-neutral-800 p-4">
//  <SiMongodb className="text-7xl text-cyan-400" />
//   </div>

//   <div className="rounded-2xl border-4 border-neutral-800 p-4">
//  <FaNodeJs className="text-7xl text-cyan-400" />
//   </div>

//   <div className="rounded-2xl border-4 border-neutral-800 p-4">
//  <BiLogoPostgresql className="text-7xl text-cyan-400" />
//   </div> 

//      </div>
//     </div>
//   )
// }

// export default Technologies
import { RiReactjsLine } from "react-icons/ri"; 
import { FaDatabase } from "react-icons/fa"; // For Data Structures & Algorithms
import { SiMongodb } from "react-icons/si"; 
import { SiSpringboot } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";  
import { SiExpress } from "react-icons/si";  // Correct icon for Express.js
import { DiJavascript1 } from "react-icons/di";  // Corrected case
import {motion} from "framer-motion" ; 

const inconVariants = (duration) => ({
  initial: {y : -10} , 
  animate : {
     y : [10, -10] , 
     transition : { 
       duration : duration , 
       ease : "linear" , 
       repeat : Infinity,
       repeatType: "reverse",
     },
  }

})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 
      whileInView={{opacity:1 , y:0}} 
      initial = {{opacity:0 , y: -100}}
      transition={{duration:1.5}}
      className="my-20 text-center text-4xl"> Technologies </motion.h2>
      <motion.div 
     whileInView= {{opacity:1 , x:0}} 
     initial= {{opacity:0 ,x: -100 }}
     transition={{duration : 1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
         variants ={inconVariants(2.5)} 
         initial = "initial "
         animate= "animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div 
         variants ={inconVariants(2.5)} 
         initial = "initial "
         animate= "animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiSpringboot className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div 
         variants ={inconVariants(2.5)} 
         initial = "initial "
         animate= "animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaDatabase className="text-7xl" />
        </motion.div>

        <motion.div  variants ={inconVariants(2.5)} 
      initial = "initial "
      animate= "animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>

        <motion.div  variants ={inconVariants(2.5)} 
      initial = "initial "
      animate= "animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl green-cyan-500" />
        </motion.div>

        <motion.div  variants ={inconVariants(2.5)} 
      initial = "initial "
      animate= "animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiJavascript1 className="text-7xl text-yellow-500" />
        </motion.div> 

        <motion.div variants ={inconVariants(2.5)} 
      initial = "initial "
      animate= "animate"  className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiExpress className="text-7xl text-sky-700" />
        </motion.div> 
      </motion.div>
    </div>
  );
};

export default Technologies;
