import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import BottomNav from "../Navbar/BottomNav";

const PATH_WITH_NAV = ["/dashboard", "/dashboard/"];

export default function Layout() {
  const { pathname } = useLocation();
  return (
    <main className="w-[100%] min-h-[100vh] flex justify-center">
      <div className="max-w-[40rem] w-[100%]">
        <Outlet />
        {PATH_WITH_NAV.includes(pathname) && <BottomNav />}
      </div>
    </main>
  );
}
