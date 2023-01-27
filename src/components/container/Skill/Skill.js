import React, { useEffect, useState } from "react";
import AnimatedLetters from "../../AnimatedLetters";
import ProgressBar from "react-bootstrap/ProgressBar";
import { motion } from "framer-motion";

import "./Skill.scss";

// Importing TagCloud package
import TagCloud from "TagCloud";

const Skill = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    async function check() {
      return setTimeout(() => {
        setLetterClass("text-animate-hover");
      }, 3000);
    }

    check();
  }, []);

  useEffect(() => {
    return () => {
      // Animation settings for Text Cloud
      const container = ".tagcloud";
      const texts = [
        "HTML 5",
        "CSS 3",
        "SASS",
        "JavaScript ES6",
        "ReactJS",
        "Java",
        "C++",
        "NodeJS",
        "MongoDB",
        "Jquery",
        "MySQL",
        "GIT",
        "GITHUB",
        "Python",
      ];

      const options = {
        radius: 300,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };
      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <div className="container" id="skill">
      <motion.div
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ x: [150, 0], opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={["M", "Y", " ", "S", "K", "I", "L", "L", "S"]}
            idx={15}
          />
        </h1>
      </motion.div>
      <div className="skill_container">
        {/* <motion.div
          className="text-skills"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-150, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <ProgressBar
            className="bar-skills"
            label="Programming Language"
            variant="danger"
            animated="true"
            now={80}
          />
          <br />
          <ProgressBar
            className="bar-skills"
            label="Web Development"
            variant="success"
            animated="true"
            now={90}
          />
          <br />
          <ProgressBar
            className="bar-skills"
            label="Development Environment"
            variant="info"
            animated="true"
            now={95}
          />
          <br />
          <ProgressBar
            className="bar-skills"
            label="Version Control"
            variant="warning"
            animated="true"
            now={95}
          />
        </motion.div> */}
        <div className="text-shpere">
          {/* span tag className must be "tagcloud"  */}
          <span className="tagcloud"></span>
        </div>
      </div>
    </div>
  );
};

export default Skill;
