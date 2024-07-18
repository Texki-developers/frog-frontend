import React from "react";
import Confetti from "react-confetti";
import ape from "../assets/images/ape.jpg";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
<<<<<<< HEAD

export default function YouAreAmazing() {
  const [showConfetti, setShowConfetti] = useState(true);
  const userId =
    window?.Telegram?.WebApp?.initDataUnsafe?.user?.id || 885866704;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  
=======
import useGetApis from "../hooks/useGetApi.hook";
import { useQuery } from "@tanstack/react-query";

export default function YouAreAmazing() {
  const [showConfetti, setShowConfetti] = useState(true);

  const userId = window?.Telegram?.WebApp?.initDataUnsafe?.user?.id;
  const { callApi } = useGetApis();
  const apiUrl = `user/age-and-coins/${userId}`;
  const fetchData = () => callApi(apiUrl);

  const { data } = useQuery({ queryKey: [apiUrl], queryFn: fetchData });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  console.log(data,'this is data');

>>>>>>> a0ecaf84720748eb1de04267f4f2c717ea96c8de
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center p-4 h-svh relative max-h-screen">
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={300}
          wind={0.01}
          gravity={0.1}
          initialVelocityY={15}
          recycle={false} // Prevent confetti from recycling, making it disappear gradually
          run={showConfetti} // Run the confetti animation
        />
      )}
      <div className="w-full flex flex-col justify-between h-full">
        <div>
          <div className="flex justify-center  pt-4">
            <div className="w-1/2 h-1 bg-gray-200"></div>
            <div className="w-1/2 h-1 bg-blue-500"></div>
          </div>
          <div className="flex flex-col items-center mt-8">
            <h2 className="text-2xl font-semibold">You are amazing!</h2>
<<<<<<< HEAD
            <p className="text-gray-500">Here is your CATS reward</p>
=======
            <p className="text-gray-500">Here is your Monkeys reward</p>
>>>>>>> a0ecaf84720748eb1de04267f4f2c717ea96c8de
            <div className="relative mt-8">
              <img src={ape} alt="Cat" className="w-[17rem]" />
            </div>
            <div className="text-6xl font-bold mt-4">818 APES</div>
            <p className="text-gray-500 mt-4">
              Thanks for your time on Telegram 🤝
            </p>
          </div>
        </div>
        <button
          onClick={() => navigate("/dashboard")}
          className="btn-common btn-solid w-full"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
