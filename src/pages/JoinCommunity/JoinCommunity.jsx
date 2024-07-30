import React from "react";
import frog from "../../assets/images/ape.jpg";
import { CiCalendarDate } from "react-icons/ci";
import useGetApis from "../../hooks/useGetApi.hook";
import { useQuery } from "@tanstack/react-query";
import { MdOutlineGroup } from "react-icons/md";
import { GiCheckMark } from "react-icons/gi";
import { useEffect } from "react";
import { HiUserGroup } from "react-icons/hi";
import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaTelegram, FaXTwitter } from "react-icons/fa6";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import JoinCarouselItem from "../../components/JoinCarouselItem/JoinCarouselItem";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import "./joincommunity.css";

export default function JoinCommunity() {

  const userId =
    window?.Telegram?.WebApp?.initDataUnsafe?.user?.id || 1103781882;
  const { callApi } = useGetApis();
  const apiUrl = `user/age-and-coins/${userId}`;
  const fetchData = () => callApi(apiUrl);


  const { data } = useQuery({ queryKey: [apiUrl], queryFn: fetchData });


  useEffect(() => {
    window?.Telegram?.WebApp?.expand();
   if(data){
    if(data?.user?.userId){
      localStorage.setItem('user',JSON.stringify({id:data?.user?.userId,name:data?.user?.name}))
    }

   }
  }, []);

  return (
    <div className="flex flex-col p-[1rem] items-center gap-[2rem] pb-[5rem]">
      <div className="w-[100%] bg-pink-50 p-[5px] uppercase text-basic text-[0.8rem] font-[500] text-center rounded-[6px]">
        🦧 Let's Ape it
      </div>
      <div>
        <img src={frog} className="w-[15rem]" />
        <h2 className="text-[1.8rem] font-[600] text-center">
          {data?.user?.totalPoints} Apes
        </h2>
      </div>
      <div className="relative max-w-[100%]">
        <Swiper
          spaceBetween={50}
          pagination={true}
          autoplay={true}
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
        >
          <SwiperSlide>
            <JoinCarouselItem
              title="FOLLOW US ON X.COM"
              description="Stay updated with the latest news"
              link="https://x.com/ape_comm"
              btn="Follow"
              userId={userId}
              reward='for 500 Apes 🦧'
            />
          </SwiperSlide>
          <SwiperSlide>
            <JoinCarouselItem
              title="Apes Community"
              description="Home of Telegram OG's"
              link="https://t.me/apes_community"
              btn="Join"
              userId={userId}
              reward='for 500 Apes 🦧'
            />
          </SwiperSlide>
          <SwiperSlide>
            <JoinCarouselItem
              title="Apes In Your Username"
              description="Add Apes in your Telegram Username"
              link=""
              btn="Go"
              userId={userId}
              reward='for 1000 Apes 🦧'
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div
        className="w-[100%] rounded-[20px] flex flex-col items-center justify-center p-[1rem] gap-[0.5rem]"
        style={{
          background:
            "linear-gradient(180deg, rgba(232,232,232,1) 0%, rgba(214,214,214,0.1012998949579832) 47%)",
        }}
      >
        <p className="text-basic uppercase">🦧 APES Community</p>
        <p className="text-[0.7rem] text-grey-300 text-center">
          Home for Telegram OGs
        </p>
        <button
          onClick={() => window.open("https://t.me/apes_community")}
          className="text-white bg-black btn-common"
        >
          Join for +500 APES
        </button>
      </div>
      <h3 className="text-[1.1rem]">Your Rewards</h3>
      <div className="flex justify-between items-center w-[100%] gap-[1rem]">
        <div className="p-[1rem] bg-grey-50 rounded-[50%]">
          <CiCalendarDate className="text-[1.2rem]" />
        </div>
        <p className="text-basic flex-1">Account Age</p>
        <p className="text-basic">+{data?.user?.account_age} Apes</p>
      </div>
      <div className="flex justify-between items-center w-[100%] gap-[1rem]">
        <div className="p-[1rem] bg-grey-50 rounded-[50%]">
          <GiCheckMark className="text-[1.2rem]" />
        </div>
        <p className="text-basic flex-1">Telegram Premium</p>
        <p className="text-basic">{data?.user?.isPremium ? `+ 1000 Apes` : 0}</p>
      </div>

      <div className="flex justify-between items-center w-[100%] gap-[1rem]">
        <div className="p-[1rem] bg-grey-50 rounded-[50%]">
          <MdOutlineGroup className="text-[1.2rem]" />
        </div>
        <p className="text-basic flex-1">Invited Friends</p>
        <p className="text-basic">
          {`+ ${data?.user?.referral || 0}  Apes`}{" "}
        </p>
      </div>

      <div className="flex justify-between items-center w-[100%] gap-[1rem]">
        <div className="p-[1rem] bg-grey-50 rounded-[50%]">
          <FaTelegram className="text-[1.2rem]" />
        </div>
        <p className="text-basic flex-1">Apes Community</p>
        <p className="text-basic">
          {data?.user?.channel_member ? "+ 500 Apes" : "0"}{" "}
        </p>
      </div>
      <div className="flex justify-between items-center w-[100%] gap-[1rem]">
        <div className="p-[1rem] bg-grey-50 rounded-[50%]">
          <FaXTwitter className="text-[1.2rem]" />
        </div>
        <p className="text-basic flex-1">Twitter</p>
        <p className="text-basic">
          {data?.user?.twitter ? "+ 500 Apes" : "0"}
        </p>
      </div>

      <div className="flex justify-between items-center w-[100%] gap-[1rem]">
        <div className="p-[1rem] bg-grey-50 rounded-[50%]">
          <IoMdCheckmarkCircleOutline className="text-[1.2rem]" />
        </div>
        <p className="text-basic flex-1">Add APE to your username</p>
        <p className="text-basic">{data?.data?.apeInclude || 0}</p>
      </div>
    </div>
  );
}
