import React from "react";

function Stripe({val}) {
  return (
    <div className=" w-full mb-20">
      <div className="text-slate-300 border-[1px] border-zinc-700 py-4 p  flex items-center justify-between px-5">
        <img className=" " src={val.url} alt="" />
        <h1 className="font-semibold">{val.number}</h1>
      </div>
    </div>
  );
}

export default Stripe;
