import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
function Button({title}) {
  const [click, setClick] = useState(false)
  const handleclick =()=>{
    setClick(!click)
  }
  return (
    
    <motion.div onClick={handleclick} initial={{x:"0"}} animate={{y: click ? "50%" :"0" }} className=" flex cursor-pointer items-center justify-between w-40 py-1 px-4 h-[2rem]  text-md font-[500] text-slate-600 rounded-full bg-slate-100">
      <span className="text-sm ">{title}</span>
      <FaArrowRightLong />
    </motion.div>
  );

}

export default Button;
