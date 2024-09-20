import React from "react";

function Footer() {
  return (
      <div className="max-w-screen-lg mx-auto w-full text-white  pb-6  flex lg:flex-row flex-col items-center  lg:items-start gap-12 lg:gap-20">
        <div className="w-1/2 text-center leading-none flex justify-center">
          <h1 className="lg:text-[9rem]  md:text-[8rem] text-[7rem]  tracking-tighter">Refocus.</h1>
        </div>                  
        <div className="w-1/2  flex  lg:justify-between justify-center gap-12  items-center px-5">
          <div className="flex flex-col gap-[5px] text-sm text-slate-300">
               {["Socials", "","" ,"Instagram", "Twitter(X?)", "LinkedIn", ].map((item,index)=><a key={index} href="#">{item}</a>)}
          </div>
          <div className="flex flex-col gap-y-[5px] text-sm text-slate-300">
               {["Socials", "","" ,"Instagram", "Twitter(X?)", "LinkedIn","Facebook" ].map((item,index)=><a key={index} href="#">{item}</a>)}
          </div>
          <div className="flex flex-col items">
            <h4 className="text-sm ">Refocus Lorem  amet consectetur adipisicing elit. Perspiciatis cum asp.</h4>
            <button className="w-32 py-1  mt-3 text-sm bg-violet-700 text-stone-200 rounded-md">
                Enterprise Partner
            </button>
          </div>
        </div>
      </div>
  );
}

export default Footer;
