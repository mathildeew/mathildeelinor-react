import { Outlet } from "react-router-dom";
import LogMar from "../../LogMar";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
  return (
    <>
      <LogMar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
