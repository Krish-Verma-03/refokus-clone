import React, { useState } from "react";
import { useScroll, motion, useMotionValueEvent } from "framer-motion";

function Work() {
  const [images, setimages] = useState([
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "60%",
      left: "45%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "42%",
      left: "55%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "55%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "63%",
      left: "50%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    function imageShow(arr) {
      setimages((prev) => 
        prev.map((item, index) =>(
          arr.indexOf(index) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        ))
      );
    }

    switch (Math.floor(data * 100)) {
      case 0:
        imageShow([]);
        break;
      case 1:
        imageShow([0]);
        break;
      case 2:
        imageShow([0, 1]);
        break;
      case 3:
        imageShow([0, 1, 2]);
        break;
      case 4:
        imageShow([0, 1, 2, 3]);
        break;
      case 5:
        imageShow([0, 1, 2, 3, 4]);
        break;
      case 6:
        imageShow([0, 1, 2, 3, 4, 5]);
        break;
    }
  });

  return (
    <div className="w-full ">
      <div className="relative  hidden md:block text-center max-w-screen-xl mx-auto  ">
        <div className="relative flex flex-col items-center w-full  top-[-3vw] ">
          <h1 className="text-[40vw]  font-medium leading-none select-none tracking-tight">
            work
          </h1>
          <h1 className="text-[#919191] text-lg">
            Web Design, Webflow Development, Creative Development
          </h1>
        </div>
        <div className="absolute top-0 w-full h-full ">
          {images && images.map(
            (image, index) =>
              image.isActive && (
                <img
                  key={index}
                  src={image.url}
                  className=" absolute w-72 rounded-lg -translate-x-[50%] -translate-y-[50%]"
                  style={{ top: image.top, left: image.left }}
                />
              )
          )}
        </div>
      </div>

      <div className="md:hidden relative overflow-x-hidden  text-center ">
        <div className=" p-4 text-center font-medium -rotate-90 flex flex-col items-center pb-8 mt-4 space-y-[-10vw] ">
          <h1 className="text-[37vw] m-0 p-0 leading-none">work</h1>
          <h1 className="text-[37vw] m-0 p-0 leading-none">work</h1>
          <h1 className="text-[37vw] m-0 p-0 leading-none">work</h1>
        </div>

        <div className="">
          <h1 className=" text-[#919191] text-lg">
            Web Design, Webflow Development, Creative Development
          </h1>
        </div>
        <div className="absolute top-0 w-full h-full">
          {images && images.map(
            (image, index) =>
              image.isActive && (
                <img
                  key={index}
                  src={image.url}
                  className="absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]"
                  style={{ top: image.top, left: image.left }}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;
