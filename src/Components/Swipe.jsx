import React, { useState } from 'react'
import Product from './Product';
import { useSwipeable } from 'react-swipeable';

function Swipe() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleSwipeLeft = () => {
      if (currentIndex < data.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    };
  
    const handleSwipeRight = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    };
    const handlers = useSwipeable({
        onSwipedLeft: handleSwipeLeft,
        onSwipedRight: handleSwipeRight,
      });
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
  return (
    
    <div className="lg:hidden relative w-full overflow-hidden " {...handlers}>
        <div
          className=" flex shrink-0  gap-8 transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * 100}% )`,padding: '0 1rem' }}
        >
        {data.map((val, index) => {
          return <div key={index} className="flex-none w-full">
          <Product products={val} />
        </div>
        })}
        </div>
        <div className="flex justify-center mt-4 ">
          {data.map((_, index) => (
            <span
              key={index}
              className={`w-2 h-2 mx-1 rounded-full transition-colors ${
                index === currentIndex ? "bg-[#7443FF] shadow-[0_0_0.45em_#9c7af9] h-[12px]" : "bg-[#523AA9]/[.3]"
              }`}
            ></span>
          ))}
        </div>
      </div>
  )
}

export default Swipe