import React from "react";
import { useEffect, useState } from "react";
import portfolio from "../../../assets/images/portfolio.png";
import AnimatedLetters from "../../AnimatedLetters";
import "./Home.scss";

import resume from "../../../assets/Resume.pdf";
import { motion } from "framer-motion";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const nameArray = [" ", "T", "o", "n", "y", " ", "V", "o"];
  const jobArray = [
    "S",
    "o",
    "f",
    "t",
    "w",
    "a",
    "r",
    "e",
    " ",
    "E",
    "n",
    "g",
    "i",
    "n",
    "e",
    "e",
    "r",
  ];

  useEffect(() => {
    async function check() {
      return setTimeout(() => {
        setLetterClass("text-animate-hover");
      }, 4000);
    }

    check();
  }, []);

  const moveVariants = {
    animation: {
      x: [15, -15],
      transition: {
        yoyo: Infinity,
        duration: 2,
        delay: 1,
      },
    },
  };

  return (
    <>
      <div className="container " id="home">
        <div className="profile-pic">
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: [-100, 80], opacity: 1 }}
            transition={{ duration: 1 }}
            className="profile-pic-mov"
          >
            <motion.img
              className="pic"
              src={portfolio}
              whileHover={{ y: -15, x: 0 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </div>

        <div className="profile_text">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,&nbsp;</span>
            {/* <br /> */}
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m </span>

            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={7}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={17}
            />
          </h1>
          <h2>a problem solver / tennis player / and music lover</h2>

          <motion.a
            href={resume}
            whileHover={{ scale: 1.5 }}
            variants={moveVariants}
            animate="animation"
          >
            MY RESUME
          </motion.a>
        </div>
      </div>
    </>
  );
};

export default Home;
