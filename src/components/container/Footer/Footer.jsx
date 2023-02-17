import React from "react";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import {
  faTableTennis,
  faHeartMusicCameraBolt,
  faMusic,
  faSoccerBall,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      className="footer"
    >
      <div className="left-section">
        <p>
          Copyright&copy;2023 <span></span>
        </p>
      </div>
      <div className="right-section">
        <p>Happy Coding!!!</p>
        <div className="stick"></div>
        <div className="enter_icons">
          <FontAwesomeIcon icon={faTableTennis} />
          <FontAwesomeIcon icon={faSoccerBall} />
          <FontAwesomeIcon icon={faHeartMusicCameraBolt} />
          <FontAwesomeIcon icon={faMusic} />
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
