import { useQuery } from "@tanstack/react-query";
import React from "react";
import useGetApis from "../../hooks/useGetApi.hook";

export default function LeaderBoard() {
  const userId =
    window?.Telegram?.WebApp?.initDataUnsafe?.user?.id || 885866704;
  const { callApi } = useGetApis();
  const url = `user/leadership-board`;
  const fetchData = () => callApi(url);

  const { data } = useQuery({ queryKey: [url], queryFn: fetchData });

  const tailwindColors = [
    "bg-red-400",
    "bg-blue-400",
    "bg-green-400",
    "bg-yellow-400",
    "bg-purple-400",
    "bg-pink-400",
    // Add more colors as needed
  ];

  let myRank;
  data &&
    data?.data?.users.map((items, index) => {
      console.log(index);
      if (items.tgId === userId) {
        myRank = {
          ...items,
          rank: index +1,
        };
      }
      return items.tgId === userId && items;
    });

  console.log(myRank);
  return (
    <div className="flex flex-col items-center p-4">
      <div className="w-full">
        <div className="mb-4">
          <h1 className="text-2xl leading-10 font-semibold text-center ">
            Telegram Wall of Fame
          </h1>
          <div className="flex items-center bg-gray-100 p-4 rounded-xl my-12">
            <div className="flex items-center">
              <div className="bg-red-500 text-white rounded-full flex items-center justify-center w-10 h-10">
                H
              </div>
              <div className="ml-4">
                <p className="font-medium">{myRank?.firstName}</p>
                <p className="text-gray-500">{myRank?.point?.point} APES</p>
              </div>
            </div>
            <div className="ml-auto">
              <p className="text-gray-500">#{myRank?.rank}</p>
            </div>
          </div>
        </div>

        <div className="pb-10">
          <h2 className="text-xl font-medium mb-2">
            {(data && data?.data?.totalCount) || 0} holders
          </h2>
          {data?.data?.users &&
            data?.data?.users?.map((holder, index) => (
              <div key={holder.rank} className="flex items-center p-4 border-b">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    tailwindColors[index % tailwindColors.length]
                  }`}
                >
                  {holder?.firstName?.charAt(0).toUpperCase()}
                </div>
                <div className="ml-4">
                  <p className="font-medium">{holder.firstName}</p>
                  <p className="text-gray-500">
                    {holder?.point?.point?.toLocaleString()} APES
                  </p>
                </div>
                <div className="ml-auto">
                  <span className="text-[1.5rem]">
                    {index === 0 ? (
                      "🥇"
                    ) : index === 1 ? (
                      "🥈"
                    ) : index === 2 ? (
                      "🥉"
                    ) : (
                      <span className="text-[1rem]">{`#${index + 1}`}</span>
                    )}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
