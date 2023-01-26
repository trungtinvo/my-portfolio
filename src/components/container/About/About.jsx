import React from "react";
import { useEffect, useState } from "react";
import AnimatedLetters from "../../AnimatedLetters";
import { motion } from "framer-motion";
import "./About.scss";
import Carousel from "react-bootstrap/Carousel";
import Image1 from "../../../assets/images/image1.jpg";
import Image2 from "../../../assets/images/image2.jpg";
import Image3 from "../../../assets/images/image3.jpg";
const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    async function check() {
      return setTimeout(() => {
        setLetterClass("text-animate-hover");
      }, 3000);
    }

    check();
  }, []);

  return (
    <div className="container" id="about">
      {/* title about me */}
      <motion.div
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ x: [150, 0], opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={["A", "B", "O", "U", "T", " ", "M", "E"]}
            idx={15}
          />
        </h1>
      </motion.div>
      {/* about container */}
      <div className="about_container">
        {/* left side introduction */}
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-150, -30], opacity: 1 }}
          transition={{ duration: 1 }}
          className="about_left"
        >
          <p>
            I am an ambitious new grad software engineer, always strive for
            knowledge and applications in programming field.
          </p>
          <p>
            I am proficient in Java, C++, Javascript programming and have strong
            background in data structures, algorithms. I would love to work on
            challenging and diverse projects.
          </p>
          <p>
            I love playing tennis with my friends every weekend so I can be
            relax and recharge myself after hard-working days. Soccer and Piano
            also my favourite. Sports and music keep me heathy as well as
            creative.
          </p>
        </motion.div>
        {/* right side introduction */}
        <Carousel className="slide-container">
          <Carousel.Item className="slide1" interval={2000}>
            <img
              className="d-block w-100 image1"
              src={Image1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item className="slide2" interval={2000}>
            <img
              className="d-block w-100 image2"
              src={Image2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item className="slide3" interval={2000}>
            <img
              className="d-block w-100 image3"
              src={Image3}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
    // </div>
  );
};

export default About;
