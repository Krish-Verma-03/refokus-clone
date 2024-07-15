import React, { useState } from "react";
import Button from "./Button";

function Product({ products, mover ,count })
 { 
  const colorData = [
    'customColor1',
    'customColor2',
    'customColor3',
    'customColor4',
    'customColor5',
    'customColor6',
    'customColor7',
  ];

  const [hoverColor, setHoverColor] = useState('');

  const handleMouseEnter = (index) => {
    setHoverColor(colorData[index]);
    mover(index);
  };

  const handleMouseLeave = () => {
    setHoverColor('');
  };

  return (
    <>
      <div 
       onMouseEnter={()=>{handleMouseEnter(count)}}
       onMouseLeave={handleMouseLeave}
       className={`hidden lg:block w-full py-20 h-[23rem] transition-colors duration-300 ease-in-out ${hoverColor ? `hover:bg-${hoverColor}` : ''}`}>
        <div className="hidden max-w-screen-xl mx-auto lg:flex items-center justify-between ">
          <h1 className="text-6xl font-semibold capitalize ">
            {products.title}
          </h1>
          <div className="w-1/3 ">
            <p className="mb-10">{products.description}</p>
            {products.live && <Button title="Live Website" />}
            {products.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
      <div className="lg:hidden block w-full pt-20  pb-10 ">
        <div className="  rounded-3xl flex flex-col justify-center items-center box-border p-6 bg-[#242424] text-white">
          <h1 className="text-3xl font-semibold capitalize">
            {products.title}
          </h1>
          <div className=" w-[100%] py-4 ">
            <video
              autoPlay
              loop
              className="rounded-2xl object-cover overflow-hidden "
              src={products.video}
              alt=""
            />
          </div>
          <p className="my-4"> {products.description}</p>
          <div className="flex  mt-2 gap-5">
            {products.live && <Button title="Live Website" />}
            {products.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
