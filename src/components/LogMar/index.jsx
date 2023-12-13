import "./index.css";
import { colorize } from "../../js/hover";
import { useEffect } from "react";

export default function LogMar() {
  useEffect(() => {
    colorize();
  }, []);

  return (
    <div className="">
      <div className="text-7xl flex justify-center mb-5">
        <span className="mr-10">M</span>
        <span className="mr-10">A</span>
        <span className="mr-10">T</span>
        <span className="mr-10">H</span>
        <span>I</span>
      </div>
      <div className="text-6xl flex justify-center mb-5">
        <span className="mr-8">L</span>
        <span className="mr-8">D</span>
        <span className="mr-8">E</span>
        <span className="mr-8">&#20;</span>
        <span>E</span>
      </div>
      <div className="text-5xl flex justify-center mb-5">
        <span className="mr-6">L</span>
        <span className="mr-6">I</span>
        <span className="mr-6">N</span>
        <span className="mr-6">O</span>
        <span>R</span>
      </div>
      <div className="text-4xl flex justify-center mb-5">
        <span className="mr-4">&copy;</span>
        <span className="mr-4">&#20;</span>
        <span className="mr-4">2</span>
        <span>0</span>
      </div>
      <div className="text-3xl flex justify-center mb-5">
        <span className="mr-2">2</span>
        <span>3</span>
      </div>
    </div>
  );
}
