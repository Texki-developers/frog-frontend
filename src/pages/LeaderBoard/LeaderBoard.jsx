import { useQuery } from "@tanstack/react-query";
import React, { useState, useEffect } from "react";
import useGetApis from "../../hooks/useGetApi.hook";

export default function LeaderBoard() {
  const [currentUser, setCurrentUser] = useState(null);
  const { callApi } = useGetApis();

  // Fetch currentUser from localStorage
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  // URL is determined after currentUser is set
  const url = currentUser ? `user/leadership-board/${currentUser.id}` : null;

  // Call API only when currentUser is available
  const { data, error, isLoading } = useQuery({
    queryKey: ["leadershipBoard", currentUser?.id],
    queryFn: () => callApi(url),
    enabled: !!currentUser?.id,
    retry: 1, // Retry once on failure
    refetchOnWindowFocus: false, // Disable refetch on window focus
  });



  // Extract specificUser and leaderboard data
  const specificUser = data?.users?.specificUser;
  const leaderboard = data?.users?.topUsers;

  const tailwindColors = [
    "bg-red-400",
    "bg-blue-400",
    "bg-green-400",
    "bg-yellow-400",
    "bg-purple-400",
    "bg-pink-400",
    // Add more colors as needed
  ];

  return (
    <div className="flex flex-col items-center p-4">
      <div className="w-full">
        <div className="mb-4">
          <h1 className="text-2xl leading-10 font-semibold text-center">
            Telegram Wall of Fame
          </h1>
          <div className="flex items-center bg-gray-100 p-4 rounded-xl my-12">
            <div className="flex items-center">
              <div className="bg-red-500 text-white rounded-full flex items-center justify-center w-10 h-10">
                {currentUser?.name?.charAt(0).toUpperCase()}
              </div>
              <div className="ml-4">
                <p className="font-medium">{currentUser?.name}</p>
                <p className="text-gray-500">
                  {new Intl.NumberFormat("en-US").format(
                    specificUser?.totalPoints || 0
                  )}{" "}
                  APES
                </p>
              </div>
            </div>
            <div className="ml-auto">
              <p className="text-gray-500">#{specificUser?.rank || "N/A"}</p>
            </div>
          </div>
        </div>

        <div className="pb-10">
          {leaderboard &&
            leaderboard.map((holder, index) => (
              <div
                key={holder?.firstName || index}
                className="flex items-center p-4 border-b"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    tailwindColors[index % tailwindColors.length]
                  }`}
                >
                  {holder?.firstName?.charAt(0).toUpperCase() || "?"}
                </div>
                <div className="ml-4">
                  <p className="font-medium">{holder?.firstName}</p>
                  <p className="text-gray-500">
                    {new Intl.NumberFormat("en-US").format(
                      holder?.totalPoints || 0
                    )}{" "}
                    APES
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
