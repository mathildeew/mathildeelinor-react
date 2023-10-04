import { motion as m } from "framer-motion";

export default function Hero() {
  return (
    <div className="intro">
      <m.h1
        animate={{ y: 0 }}
        initial={{ y: "-100%" }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Mathilde Elinor
      </m.h1>

      <div className="blobContainer">
        <m.div className="blobText">
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
          >
            I like to craft solid, accessible and engaging products, bringing
            ideas to life.
          </m.p>
        </m.div>
        <m.div
          className="blob"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="portrait"></div>
        </m.div>
      </div>
    </div>
  );
}
