import React, { useEffect, useState } from "react";
import AnimatedLetters from "../../AnimatedLetters";
import ProgressBar from "react-bootstrap/ProgressBar";
import { motion } from "framer-motion";

import "./Skill.scss";

// Importing TagCloud package
// import TagCloud from "TagCloud";
import { TagCloud } from "react-tagcloud";

const Skill = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  // // Animation settings for Text Cloud
  // const container = ".tagcloud";
  // const texts = [
  //   "HTML 5",
  //   "CSS 3",
  //   "SASS",
  //   "JavaScript ES6",
  //   "ReactJS",
  //   "Java",
  //   "C++",
  //   "NodeJS",
  //   "MongoDB",
  //   "Jquery",
  //   "MySQL",
  //   "GIT",
  //   "GITHUB",
  //   "Python",
  // ];

  // const options = {
  //   radius: 300,
  //   maxSpeed: "normal",
  //   initSpeed: "normal",
  //   keep: true,
  // };

  const customRenderer = (tag, size, color) => (
    <span
      key={tag.value}
      style={{
        animation: "blinker 3s linear infinite",
        animationDelay: `${Math.random() * 2}s`,
        fontSize: `${size / 2}em`,
        border: `2px solid ${color}`,
        margin: "3px",
        padding: "3px",
        display: "inline-block",
        color: "white",
      }}
    >
      {tag.value}
    </span>
  );

  const data = [
    { value: "JavaScript ES6", count: 32 },
    { value: "ReactJS", count: 30 },
    { value: "NodeJS", count: 28 },
    { value: "ExpressJS", count: 25 },
    { value: "HTML5", count: 33 },
    { value: "MongoDB", count: 18 },
    { value: "CSS3", count: 30 },
    { value: "SASS", count: 20 },
    { value: "Java", count: 20 },
    { value: "C++", count: 20 },
    { value: "Jquery", count: 20 },
    { value: "MySQL", count: 20 },
    { value: "GIT", count: 20 },
    { value: "GITHUB", count: 20 },
    { value: "Python", count: 30 },
  ];
  useEffect(() => {
    async function check() {
      return setTimeout(() => {
        setLetterClass("text-animate-hover");
      }, 3000);
    }

    check();
  }, []);

  // useEffect(() => {
  //   return () => {
  //     TagCloud(container, texts, options);
  //   };
  // }, []);

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
        <motion.div
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
        </motion.div>
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [100, -30], opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="proj-right"
        >
          <TagCloud
            className="tagcloud"
            tags={data}
            minSize={1}
            maxSize={5}
            renderer={customRenderer}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Skill;
