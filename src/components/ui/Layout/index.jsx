import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <>
      <main>
        <Navbar />
        <Outlet />
        <Footer />
      </main>
    </>
  );
}
