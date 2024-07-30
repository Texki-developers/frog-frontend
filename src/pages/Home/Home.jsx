import React from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AuthApiService from "../../services/api-services";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const lastLocation = localStorage.getItem("location");

    if (lastLocation) {
      switch (lastLocation) {
        case "home":
          navigate("/checking");
          break;
        case "checking":
          navigate("/rising-star");
          break;
        case "rising-star":
          navigate("/amazing");
          break;
        case "amazing":
          navigate("/dashboard");
          break;
        default:
          break;
      }
    }
    console.log(
      { data: window?.Telegram?.WebApp?.initDataUnsafe },
      "user data"
    );

    const user = window?.Telegram?.WebApp?.initDataUnsafe?.user || {
      id: 189769283,
    };

    if (user) {
      const apiBody = {
        firstName: user.first_name || "muhsin",
        lastName: user.last_name || "n",
        userName: user.username || "abcd",
        id: user.id,
        premium: user?.is_premium ? true : false,
      };
      createUser(apiBody);
    }
  }, []);

  const createUser = async (apiBody) => {
    const data = await AuthApiService.postApi("user/init", apiBody);
    console.log(data, "this is data");
    localStorage.setItem('account_age', data.accountAge)
  };

  return (
    <div className="text-2xl p-[1rem] flex flex-col min-h-svh">
      <div className="flex flex-col items-center text-center gap-[1rem] justify-center flex-1">
        <h3 className="font-[600]">👋 Hey!</h3>
        <p className="text-basic text-grey-400 ">
          You've been in Telegram for a while, it's time to get rewarded
        </p>
      </div>
      <button
        onClick={() => {
          localStorage.setItem("location", "home");
          navigate("/checking");
        }}
        className="btn-common btn-solid"
      >
        Wow, Let's go
      </button>
    </div>
  );
}
