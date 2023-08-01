import { Outlet } from "react-router-dom";
import Header from "../Layout/Header/";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
