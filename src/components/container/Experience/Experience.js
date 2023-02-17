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

      <div class="project">
        <div class="project1">
          <h3>Project 1</h3>
          <figure>
            <img className="pro-pic" src={projImage1} />
            <figcaption>
              <p>Android Mobile App</p>
            </figcaption>
          </figure>
          <details>
            <summary>Take a Closer Look</summary>
            <a href="https://github.com/trungtinvo">Github</a>
          </details>
        </div>

        <div class="project2">
          <h3>Project 2</h3>
          <figure>
            <img className="pro-pic" src={projImage2} />
            <figcaption>
              <p>React Keeper App</p>
            </figcaption>
          </figure>
          <details>
            <summary>Take a Closer Look</summary>
            <a href="https://github.com/trungtinvo">Github</a>
          </details>
        </div>

        <div class="project3">
          <h3>Project 3</h3>
          <figure>
            <img className="pro-pic" src={projImage3} />
            <figcaption>
              <p>Javasript Simon Game</p>
            </figcaption>
          </figure>
          <details>
            <summary>Take a Closer Look</summary>
            <a href="https://github.com/trungtinvo">Github</a>
          </details>
        </div>

        <div class="project4">
          <h3>Project 4</h3>
          <figure>
            <img className="pro-pic" src={projImage4} />
            <figcaption>
              <p>Analytics Website</p>
            </figcaption>
          </figure>
          <details>
            <summary>Take a Closer Look</summary>
            <a href="https://github.com/trungtinvo">Github</a>
          </details>
        </div>
      </div>
    </div>
  );
}

export default Experience;
