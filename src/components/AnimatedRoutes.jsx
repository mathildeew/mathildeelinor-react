import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Layout from "./ui/Layout";
import NotFound from "../pages/NotFound";

export default function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location]);

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/prosjekter" element={<Portfolio />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
