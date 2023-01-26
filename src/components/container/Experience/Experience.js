import React from "react";
import { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import AnimatedLetters from "../../AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import projImage1 from "../../../assets/images/project1.png";
import projImage2 from "../../../assets/images/project2.png";
import projImage3 from "../../../assets/images/project3.png";
import projImage4 from "../../../assets/images/project4.png";

import "./Experience.scss";

import {
  faGraduationCap,
  faBriefcaseClock,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Experience() {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    async function check() {
      return setTimeout(() => {
        setLetterClass("text-animate-hover");
      }, 3000);
    }

    check();
  }, []);

  const schoolIcon = (
    <FontAwesomeIcon icon={faGraduationCap} className="anchor-icon" />
  );
  const job = (
    <FontAwesomeIcon icon={faBriefcaseClock} className="anchor-icon" />
  );
  const gitIcon = <FontAwesomeIcon icon={faGithub} className="anchor-icon" />;
  return (
    <div className="container" id="experience">
      {/* title education*/}
      <motion.div
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ x: [150, 0], opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={[
              "M",
              "Y",
              " ",
              "E",
              "D",
              "U",
              "C",
              "A",
              "T",
              "I",
              "O",
              "N",
            ]}
            idx={15}
          />
        </h1>
      </motion.div>

      {/* experience container */}
      <div className="experience_container">
        {/* timeline portfolio */}
        <VerticalTimeline className="time_line">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2010 - 2014"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={schoolIcon}
          >
            <h3 className="vertical-timeline-element-title">
              University of Economic Ho Chi Minh City - Vietnam
            </h3>
            <p> Bachelor in Finance</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2014 - 2018"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={job}
          >
            <h3 className="vertical-timeline-element-title">
              Bank for Investment and Development of Vietnam
            </h3>

            <p>Personal Banker</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018 - 2023"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={schoolIcon}
          >
            <h3 className="vertical-timeline-element-title">
              University of California - San Diego
            </h3>
            <p>Bachelor of Science in Computer Science</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>

      {/* title projects*/}
      <motion.div
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ x: [150, 0], opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={["M", "Y", " ", "P", "R", "O", "J", "E", "C", "T", "S"]}
            idx={15}
          />
        </h1>
      </motion.div>

      {/* projects container*/}
      <div className="proj_container">
        {/* left side projectx */}
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-50, 100], opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="proj-left"
        >
          <img
            src={projImage1}
            className="proj1-pic proj-pic"
            alt="project-pic"
          ></img>
          <div className="proj-bg">
            <a
              className="proj-icon"
              href="https://github.com/trungtinvo/Project-CSE110-UCSD--Team4-Zooseaker"
            >
              {gitIcon}
            </a>
          </div>

          <img
            src={projImage2}
            className="proj-bottom-pic proj-pic"
            alt="project-pic"
          ></img>
          <div className="proj-bg proj-bottom-bg ">
            <a
              className="proj-icon"
              href="https://github.com/trungtinvo/Keeper-Project"
            >
              {gitIcon}
            </a>
          </div>
        </motion.div>

        {/* right side projectx */}
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [300, 150], opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="proj-right"
        >
          <img
            src={projImage3}
            className="proj3-pic proj-pic"
            alt="project-pic"
          ></img>
          <div className="proj-bg proj3-bg ">
            <a
              className="proj-icon"
              href="https://github.com/trungtinvo/simon-game"
            >
              {gitIcon}
            </a>
          </div>
          <img
            src={projImage4}
            className="proj-bottom-pic proj-pic"
            alt="project-pic"
          ></img>
          <div className="proj-bg proj-bottom-bg ">
            <a
              className="proj-icon"
              href="https://github.com/trungtinvo/Project-CSE135-UCSD"
            >
              {gitIcon}
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Experience;
