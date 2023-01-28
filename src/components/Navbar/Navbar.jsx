import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { motion } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import Logo from "../../assets/images/logo-t.png";
import Sublogo from "../../assets/images/logo_sub.png";
import AnimatedLetters from "../AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faScrewdriverWrench,
  faBriefcaseClock,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [scroll, setScroll] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [letterClass, setLetterClass] = useState("text-animate");

  const menuVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 50,
      transition: {
        type: "tween",
        duration: 0.5,
      },
    },
  };
  const navLinkVariants = {
    hidden: {
      display: "none",
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: -30,
      transition: {
        delay: 0.7,
      },
    },
  };

  const li = [<FontAwesomeIcon icon={faLinkedin} className="anchor-icon" />];
  const gi = [<FontAwesomeIcon icon={faGithub} className="anchor-icon" />];
  const yu = [<FontAwesomeIcon icon={faYoutube} className="anchor-icon" />];
  const fa = [<FontAwesomeIcon icon={faFacebook} className="anchor-icon" />];
  const navLinks = ["home", "about", "skill", "experience", "contact"];
  const listenScrollEvent = () => {
    if (window.scrollY <= 450 && window.scrollY > 0) {
      setScroll(1);
    } else if (window.scrollY > 450 && window.scrollY <= 900) {
      setScroll(2);
    } else if (window.scrollY > 900 && window.scrollY <= 1700) {
      setScroll(3);
    } else if (window.scrollY > 1700 && window.scrollY <= 3500) {
      setScroll(4);
    } else if (window.scrollY > 3500 && window.scrollY <= 5500) {
      setScroll(5);
    } else {
      setScroll(0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      listenScrollEvent();
    });
  }, []);

  useEffect(() => {
    async function check() {
      return setTimeout(() => {
        setLetterClass("text-animate-hover");
      }, 100);
    }

    check();
  }, []);

  return (
    <motion.div
      initial={{ y: -25 }}
      animate={{ y: -5 }}
      transition={{ duration: 0.5 }}
      className={scroll >= 1 ? "header active" : "header"}
    >
      <div className="Nav_container">
        <div className="logo">
          <a href="/">
            <img className="logo-t" src={Logo} alt="logo-t" />
            <img className="sub-logo" src={Sublogo} alt="sub-logo" />
          </a>
        </div>
        <ul className="nav_links">
          <li>
            <a
              href="#home"
              className={scroll <= 1 ? "home-link active" : "home-link"}
            >
              <FontAwesomeIcon icon={faHome} />
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={scroll === 2 ? "about-link active" : "about-link"}
            >
              <FontAwesomeIcon icon={faUser} />
            </a>
          </li>
          <li>
            <a
              href="#skill"
              className={scroll === 3 ? "skills-link active" : "skills-link"}
            >
              <FontAwesomeIcon icon={faScrewdriverWrench} />
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className={
                scroll === 4 ? "portfolio-link active" : "portfolio-link"
              }
            >
              <FontAwesomeIcon icon={faBriefcaseClock} />
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={scroll === 5 ? "contact-link active" : "contact-link"}
            >
              <FontAwesomeIcon icon={faAddressBook} />
            </a>
          </li>
        </ul>
        <div className="social_icons">
          <div>
            <a href="https://www.linkedin.com/in/tony-trung-tin-vo-96398b212/">
              <AnimatedLetters
                letterClass={letterClass}
                strArray={li}
                idx={7}
              />
            </a>
          </div>
          <div>
            <a href="https://github.com/trungtinvo">
              <AnimatedLetters
                letterClass={letterClass}
                strArray={gi}
                idx={7}
              />
            </a>
          </div>

          <div>
            <a href="https://www.youtube.com/channel/UCtPHws4AhhO2YMMHYcIRc7g">
              <AnimatedLetters
                letterClass={letterClass}
                strArray={yu}
                idx={7}
              />
            </a>
          </div>

          <div>
            <a href="https://www.facebook.com/VoTin0992/">
              <AnimatedLetters
                letterClass={letterClass}
                strArray={fa}
                idx={7}
              />
            </a>
          </div>
        </div>
        <div className="menu">
          <HiMenuAlt4
            onClick={() => {
              setToggle(true);
            }}
          />
        </div>
        <motion.div
          className="closeMenu"
          variants={menuVariants}
          initial="hidden"
          animate={toggle ? "visible" : "hidden"}
        ></motion.div>

        <motion.div
          variants={navLinkVariants}
          animate={toggle ? "visible" : "hidden"}
          className="menuX"
        >
          <HiX onClick={() => setToggle(false)} />
          {navLinks.map((navlink, index) => {
            return (
              <li key={index}>
                <a href={`#${navlink}`} onClick={() => setToggle(false)}>
                  {navlink}
                </a>
              </li>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Navbar;
