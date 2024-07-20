import React from "react";

export default function JoinCarouselItem({ title, description, link, btn }) {
  return (
    <div className="flex gap-[0.5rem] flex-col bg-[rgba(0,0,0,0.2)] rounded-[20px] p-[1rem]">
      <h3 className="text-[1.2rem] font-[600]">{title}</h3>
      <p>{description}</p>
      <button
        onClick={() => (window.location.href = link)}
        className="bg-white px-[1.5rem] py-[0.5rem] w-[max-content] rounded-[50px] text-black font-[500]"
      >
        {btn}
      </button>
    </div>
  );
}
