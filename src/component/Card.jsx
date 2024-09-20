import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Button from "./Button";

function Card({width,start,para,margin,hover,padding}) {
  return (
    <div className={`${width}  bg-zinc-800 p-5 rounded-xl min-h-[24rem] flex flex-col ${hover} justify-between ${padding}` }>
        <div className="flex justify-between items-center text-slate-300 text-sm ">
          <h4>Up Next: Culture</h4>
          <FaArrowRightLong />
        </div>
        <h1 className={`text-3xl ${margin} font-medium  mb-40 `}> Who we are</h1>
        <div className="down w-full">
            {start ? <>
              <h1 className="text-[2.85rem]  w-full leading-none font-semibold mb-4">Start a Project</h1>
              <Button title = "Contact Us"/>
            </>: ""}
            {para ? (<p className="text-zinc-400 mt-5 text-sm">Lorem ipsum dolor sit amet consectetur  elit.</p>): ""}
        </div>
    </div>
  );
}

export default Card;
