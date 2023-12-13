import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/ui/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import NotFound from "./pages/404";
import LillestromOptikk from "./pages/Projects/lillestromoptikk";
import SchoolWork from "./pages/Projects/schoolWork";

export default function App() {
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location]);

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="prosjekter" element={<Projects />} />
        <Route
          path="prosjekter/lillestrom-optikk"
          element={<LillestromOptikk />}
        />
        <Route path="prosjekter/:id" element={<SchoolWork />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
