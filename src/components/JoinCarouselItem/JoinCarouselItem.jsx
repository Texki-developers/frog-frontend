import React from "react";
import AuthApiService from "../../services/api-services";


export default function JoinCarouselItem({
  title,
  description,
  link,
  btn,
  userId=1287479184,
}) {
  const handleClick = async () => {
    if (title === "FOLLOW US ON X.COM") {
      const getApes = localStorage.getItem("apes");
      if (getApes) {
        console.log(getApes, "getaps");
        const apiUrl = `user/telegram/${userId}}`;
        try {
          const data = await AuthApiService.getApi(apiUrl);
          console.log(data, "the data");
         return window.open(link)
         
        } catch (error) {
          console.error("Error fetching API", error);
          // Optionally handle the error, e.g., show a message to the user
        }
      } else {
        localStorage.setItem("apes", true);
        return window.open(link)
      }
    } else {
      return window.open(link)
    }
  };
  
  return (
    <div className="flex gap-[0.5rem] flex-col bg-[rgba(0,0,0,0.2)] rounded-[20px] p-[1rem]">
      <h3 className="text-[1.2rem] font-[600]">{title}</h3>
      <p>{description}</p>
      <button
        onClick={handleClick}
        className="bg-white  px-[1.5rem] py-[0.5rem] w-[max-content] rounded-[50px] text-black font-[500]"
      >
        {btn}
      </button>
      <p className="text-xs ml-2 text-white"> for 500 Apes 🦧</p>
    </div>
  );
}
