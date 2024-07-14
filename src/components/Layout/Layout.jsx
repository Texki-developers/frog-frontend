import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <main className="w-[100%] min-h-[100vh] flex justify-center">
      <div className="max-w-[40rem] w-[100%]">
        <Outlet />
      </div>
    </main>
  );
}
