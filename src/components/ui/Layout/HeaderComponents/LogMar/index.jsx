import "./index.css";
import { useEffect } from "react";
import { colorize } from "../../../../../js/hover";

export default function LogMar() {
  useEffect(() => {
    colorize();
  }, []);

  return (
    <div className="flex flex-col gap-5 py-5">
      <div className="text-7xl flex justify-center gap-16">
        <span>M</span>
        <span>A</span>
        <span>T</span>
        <span>H</span>
        <span>I</span>
      </div>
      <div className="text-6xl flex justify-center gap-14">
        <span>L</span>
        <span>D</span>
        <span>E</span>
        <span>&#20;</span>
        <span>E</span>
      </div>
      <div className="text-5xl flex justify-center gap-12">
        <span>L</span>
        <span>I</span>
        <span>N</span>
        <span>O</span>
        <span>R</span>
      </div>
      <div className="text-4xl flex justify-center gap-10">
        <span>&copy;</span>
        <span>&#20;</span>
        <span>2</span>
        <span>0</span>
      </div>
      <div className="text-3xl flex justify-center gap-8">
        <span>2</span>
        <span>3</span>
      </div>
    </div>
  );
}
