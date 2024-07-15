import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";


function Products() {
  const data = [
    {
        title: "arqitel",
        description: 'With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.',
        live: true,
        case: false,
        video: "https://cdn.refokus.com/website/Arqitel/Arqitel project video 4_3.webm"
        
    },
    {
        title: "cula",
        description: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
        live: true,
        case: false,
        video: "https://cdn.refokus.com/website/Cula_promo_new_4_3.mp4"
    },
    {
        title: "Jungle",
        description: 'We crafted a timeless visual system for Jungle Ventures, covering all aspects of web design, and empowered their marketing team to scale organically using Webflow.',
        live: true,
        case: false,
        video: "https://cdn.refokus.com/website/jungle-4-3-.webm"
    },
    {
        title: "TTR",
        description: "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
        live: true,
        case: false,
        video: "https://cdn.refokus.com/website/TTR/TTR project video 4_3_H.264.webm"
    },
    {
        title: "Maniv",
        description: 'A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.',
        live: true,
        case: false,
        video: "https://cdn.refokus.com/website/Maniv-Compressed.mp4"
    },
    {
        title: "singularity",
        description: 'A new site for Singularity that supports their growth and showcases their true identity as industry innovators.',
        live: true,
        case: false,
        video: "https://cdn.refokus.com/Singularity Promo 4_3 2024.webm"
    },
    {
        title: "weglot",
        description: 'We made a fun and engaging showcase website for our friends from Weglot to promote their no-code translation solution in Germany.',
        live: true,
        case: false,
        video: "https://cdn.refokus.io/website/2022/videos/weglot.webm"
    },
]
  // const data = [
  //   {
  //     title: "arqitel",
  //     description:
  //       "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
  //     live: true,
  //     case: false,
  //     video:
  //       "src\\assets\\Arqitel.webm",
  //   },
  //   {
  //     title: "cula",
  //     description:
  //       "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
  //     live: true,
  //     case: false,
  //     video: "src\\assets\\Cula.mp4",
  //   },
  //   {
  //     title: "Jungle",
  //     description:
  //       "We crafted a timeless visual system for Jungle Ventures, covering all aspects of web design, and empowered their marketing team to scale organically using Webflow.",
  //     live: true,
  //     case: false,
  //     video: "src\\assets\\Jungle.webm",
  //   },
  //   {
  //     title: "TTR",
  //     description:
  //       "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
  //     live: true,
  //     case: false,
  //     video:
  //       "src\\assets\\TTR.webm",
  //   },
  //   {
  //     title: "Maniv",
  //     description:
  //       "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
  //     live: true,
  //     case: false,
  //     video: "src\\assets\\Maniv.mp4",
  //   },
  //   {
  //     title: "singularity",
  //     description:
  //       "A new site for Singularity that supports their growth and showcases their true identity as industry innovators.",
  //     live: true,
  //     case: false,
  //     video: "src\\assets\\Singularity.webm",
  //   },
  //   {
  //     title: "weglot",
  //     description:
  //       "We made a fun and engaging showcase website for our friends from Weglot to promote their no-code translation solution in Germany.",
  //     live: true,
  //     case: false,
  //     video: "src\\assets\\Weglot.webm",
  //   },
  // ];
  
  const [pos, setpos] = useState(0);
  const mover = (val) => {
    setpos(val * 23);
   
  };

  return (
    <>
      <div className="hidden lg:block w-full relative mt-32 ">
        
        {data.map((val, index) => {
          return (
            <Product key={index} mover={mover} count={index} products={val} />
          );
        })}
        <div className="absolute top-0 w-full h-full pointer-events-none">
          <motion.div
            initial={{ y: pos, x: "-50%" }}
            animate={{ y: pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="absolute w-[28rem] h-[23rem]  left-[44%] overflow-hidden"
          >
            {data.map((val, index) => {
              return (
                <motion.div
                key={index}
                animate={{ y: -pos + `rem` }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
                className="w-full h-full flex flex-col justify-center  "
              >
                <video
                autoPlay
                loop 
              className=" rounded-3xl object-cover overflow-hidden"
              src={val.video}
              alt=""></video>
              </motion.div>
            )
              
              
              
              
            })}
            
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Products;
