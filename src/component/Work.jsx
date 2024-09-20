import React, { useState } from "react";
import { useMotionValueEvent, motion, useScroll } from "framer-motion";

function Work() {
  const [images, setImages] = useState([
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65493e5d5a9929dadf06102f_Rectangle%252015007-p-500.png",
      top: "48%",
      left: "48%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65493e5d5a9929dadf061023_Rectangle%252015008%2520(1)-p-500.png",
      top: "50%",
      left: "59%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65493e5d5a9929dadf06102c_Rectangle%252015019-p-500.png",
      top: "60%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65493e5d5a9929dadf061020_Rectangle%252015001-p-500.png",
      top: "60%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65493e5d5a9929dadf061026_Rectangle%252015000-p-500.png",
      top: "72%",
      left: "55%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  // Activate images and keep them active once shown
  const shownHideImg = (scrollVal) => {
    let updatedImages = images.map((image, index) => {
      if (index <= Math.floor(scrollVal)) {
        // Activate image when scrolling down
        return { ...image, isActive: true };
      } else {
        // Deactivate image when scrolling back up
        return { ...image, isActive: false };
      }
    });
    setImages(updatedImages);
  };
  

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    shownHideImg(Math.floor(latest*100));
  });

  return (
    <div className="w-full text-white ">
      <div className="max-w-screen-lg mx-auto text-center relative">
        <h1 className="lg:text-[60vh] md:text-[51vh] sm:text-[40vh] text-[28vh] leading-none pt-6 md:pt-10 tracking-tight font-semibold">
          work
        </h1>
        <div className="absolute top-[-25%] right-[12%] w-full h-full">
          {images.map((item, index) =>
            item.isActive ? (
              <motion.img
                key={index}
                initial={{ opacity: 0, scale: 0.5 }} // Image starts invisible and smaller
                animate={{ opacity: 1, scale: 1 }} // Image becomes fully visible and normal size
                transition={{
                  duration: 0.2, // Duration of the animation
                  delay : 0.1 // Delays based on the index of the image
                }}
                style={{ top: item.top, left: item.left }}
                className="object-cover absolute rounded-lg md:w-50 sm:w-45 w-32 lg:w-60 -translate-x-1/2 -translate-y-1/2"
                src={item.url}
              />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;
