import "./Contact.scss";
import { useEffect, useState } from "react";
import AnimatedLetters from "../../AnimatedLetters";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBeer } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i4ny5nb",
        "template_c7e11dk",
        form.current,
        "r2u4VDCCm2ZUgA4nn"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  useEffect(() => {
    async function check() {
      return setTimeout(() => {
        setLetterClass("text-animate-hover");
      }, 3000);
    }

    check();
  }, []);

  return (
    <div className="container" id="contact">
      {/* title contact me */}
      <motion.div
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ x: [150, 0], opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={["C", "O", "N", "T", "A", "C", "T", " ", "M", "E"]}
            idx={15}
          />
        </h1>
      </motion.div>

      {/* contact form */}
      <div className="contact_form">
        {/* mapJS */}
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-150, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="contact_left_container"
        >
          <h3>
            Let's go get some drink
            <FontAwesomeIcon icon={faBeer} className="anchor-icon" />
          </h3>
          <div className="map-wrap">
            <MapContainer center={[32.922626, -117.124992]} zoom={13}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[32.922626, -117.124992]}>
                <Popup>I am here!</Popup>
              </Marker>
            </MapContainer>
          </div>
        </motion.div>

        {/* right contact */}
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [150, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="contact_right"
        >
          <h3>Get In Touch</h3>

          {/* emailJS */}
          <form ref={form} onSubmit={sendEmail}>
            <div className="row">
              <input type="text" name="user_name" placeholder="Your Name" />
            </div>
            <div className="row">
              <input type="text" name="user_phone" placeholder="Phone" />
              <input
                type="email"
                name="user_email"
                required
                placeholder="Email"
              />
            </div>
            <div className="row">
              <textarea
                name="message"
                required
                placeholder="message"
              ></textarea>
            </div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="btn"
            >
              <button type="submit">Send</button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
