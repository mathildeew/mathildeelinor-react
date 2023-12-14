import { Outlet, useLocation } from "react-router-dom";
import HeaderComponents from "./HeaderComponents";

export default function Layout() {
  return (
    <>
      <HeaderComponents />
      <main>
        <Outlet />
      </main>
    </>
  );
}
