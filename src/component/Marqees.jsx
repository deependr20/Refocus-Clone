import React from 'react';
import { motion } from "framer-motion";

function Marqees() {
  const images = [
    "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/661b2455cb60f1919ab48e20_Logo.svg",
    "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d2759c8b021207af521b_yahoo.svg",
    "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275999da7719dc1fe2c_haufe.svg",
    "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d27505e3a120466b87aa_singularity.svg",
    "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275e1d5aa08ccc379dd_ypo.svg",
    "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275f0442508aceaec02_accel.svg",
    "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/661b2455cb60f1919ab48e20_Logo.svg",
    "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d2759c8b021207af521b_yahoo.svg",
    "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275999da7719dc1fe2c_haufe.svg",
    "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d27505e3a120466b87aa_singularity.svg",
    "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275e1d5aa08ccc379dd_ypo.svg",
    "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275f0442508aceaec02_accel.svg",
    "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/661b2455cb60f1919ab48e20_Logo.svg",
    "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d2759c8b021207af521b_yahoo.svg",
    "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275999da7719dc1fe2c_haufe.svg",
    "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d27505e3a120466b87aa_singularity.svg",
    "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275e1d5aa08ccc379dd_ypo.svg",
    "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275f0442508aceaec02_accel.svg"
  ];

  // Duplicate the images to create a seamless loop
  const allImages = [...images, ...images];

  return (
    <div className='w-full overflow-hidden'>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          ease: "linear",
          duration: 10, // Adjust duration to control speed
          repeat: Infinity
        }}
        className='flex gap-x-16'
      >
        {allImages.map((item, index) => (
          <img key={index} className='shrink-0 h-10' src={item} alt={`image-${index}`} />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          ease: "linear",
          duration: 10, // Adjust duration to control speed
          repeat: Infinity
        }}
        className='flex gap-x-16 mt-16'
      >
        {allImages.map((item, index) => (
          <img key={index} className='shrink-0 h-10' src={item} alt={`image-${index}`} />
        ))}
      </motion.div>
    </div>
  );
}

export default Marqees;
