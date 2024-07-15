import React from "react";
import Card from "./Card";

function Cards() {
  return (
    <>
      <div className="hidden md:block w-full ">
        <div className="max-w-screen-xl mx-auto flex gap-1  py-20">
          <Card width={"basis-1/3"} start={false} para={true} hover={"bg-customColor8"} />
          <Card
            width={"basis-2/3"}
            start={true}
            para={false}
            hover={"bg-purple-500"}
          />
        </div>
      </div>

      <div className="md:hidden w-full mt-20 ">
        <div className="max-w-screen p-4 flex flex-col-reverse gap-1 overflow-hidden  ">
          <Card  start={false} para={true} hover={"bg-customColor8"}/>
          <Card
            
            start={true}
            para={false}
            hover={"bg-purple-500"}
          />
        </div>
      </div>
    </>
  );
}

export default Cards;
