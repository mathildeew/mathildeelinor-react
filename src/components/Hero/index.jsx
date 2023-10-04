import { motion as m } from "framer-motion";

export default function Hero() {
  return (
    <div className="intro flex flex-col overflow-hidden">
      <m.h1
        animate={{ y: 0 }}
        initial={{ y: "-100%" }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-home font-medium mb-16 md:text-8xl"
      >
        Mathilde Elinor
      </m.h1>

      <div className="blobContainer flex flex-col justify-around mb-16 md:flex-row md:items-center">
        <m.div className="blobText overflow-hidden md:w-1/2">
          <m.h2
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Front-end developer
          </m.h2>
          <m.p
            animate={{ y: 0 }}
            initial={{ y: "100%" }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="md:text-lg"
          >
            I like to craft solid, accessible and engaging products, bringing
            ideas to life.
          </m.p>
        </m.div>
        <m.div
          className="blob bg-primary w-72 h-96  flex flex-col justify-center items-center rounded-blob mx-auto my-0 animate-[morph_2.75s_linear_infinite]"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {/* <div className="portrait"></div> */}
          <img src="/public/self1.jpg" className="h-80 rounded-blob" />
        </m.div>
      </div>
    </div>
  );
}
