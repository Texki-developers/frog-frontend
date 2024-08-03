import React from "react";
import frog from "../../assets/images/ape.jpg";
import useGetApis from "../../hooks/useGetApi.hook";
import { useQuery } from "@tanstack/react-query";

export default function InvitePage() {
  const userId = window?.Telegram?.WebApp?.initDataUnsafe?.user?.id 
  const url = `https://t.me/theOGapes_bot?start=${userId}`; // Replace with your URL
  const text = "Invite your Friends to get APES coin"; // Replace with your text

const { callApi } = useGetApis();
const apiUrl = `user/friends/${userId}`;
const fetchData = () => callApi(apiUrl);

const { data } = useQuery({ queryKey: [url], queryFn: fetchData });
const tailwindColors = [
  'bg-red-400',
  'bg-blue-400',
  'bg-green-400',
  'bg-yellow-400',
  'bg-purple-400',
  'bg-pink-400',
  // Add more colors as needed
];

console.log(data,"FN")
  return (
    <div className="text-2xl p-[1rem] flex flex-col min-h-[100vh] text-center justify-between items-center pb-[5rem]">
      <h3 className="text-[1.7rem] leading-[40px] font-[600]">
        Invite Friends <br /> and get more APES
      </h3>
      <img src={frog} className="w-[15rem]" alt="Frog" />
      <div className="w-full flex justify-start">
      <h2 className="text-base font-medium mb-2">
            {(data && data?.data?.length) || 0} Friends
          </h2>
      </div>
    
      {data &&  data?.data?.map((holder, index) => (
            <div key={holder.rank} className='flex items-center p-4  w-full'>
              <div className={`w-10  rounded-full flex items-center justify-center ${tailwindColors[index % tailwindColors.length]}`}>
                {holder.firstName.charAt(0).toUpperCase()}
              </div>
              <div className='ml-4 flex justify-between w-full text-base'>
                <p className='font-medium'>{holder?.firstName}</p>
                <p className='text-gray-500'>+{holder?.points.toLocaleString()} APES</p>
              </div>
            
            </div>
          ))}
      <div className="w-[100%]">
        <p className="text-[0.7rem] text-grey-300 text-center">Tap on the button to invite your friends</p>
        <button 
          onClick={() => {
            window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`);
          }} 
          className="btn-common btn-solid w-[100%]"
        >
          Invite Friends
        </button>
      </div>
    </div>
  );
}
