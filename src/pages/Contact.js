import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard/lib/Component";
import ButtonsBottom from "../components/ButtonsBottom";
import ContactForm from "../components/ContactForm";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import SocialNetwork from "../components/SocialNetwork";
import { motion } from "framer-motion";

const Contact = () => {
  const variants = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 300,
    },
  };
  const transition = {
    ease: [0.03, 0.87, 0.73, 0.9],
    duration: 0.6,
  };

  return (
    <main>
      <Mouse />
      <motion.div
        className="contact"
        exit="out"
        animate="in"
        initial="out"
        variants={variants}
        transition={transition}
      >
        <Navigation />
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>Adresse: </h4>
              <p>28 rue roger martin du gard</p>
              <p>Clermont</p>
            </div>
          </div>

          <div className="phone">
            <div className="content">
              <h4>Téléphone</h4>
              <CopyToClipboard text="0673246987" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => {
                    alert("Téléphone copié");
                  }}
                >
                  06.73.24.69.87
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>Email</h4>
              <CopyToClipboard
                text="charles_noel60@outlook.fr"
                className="hover"
              >
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => {
                    alert("Email copié");
                  }}
                >
                  Charles_noel60@outlook.fr
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <SocialNetwork />
          <div className="credits">
            <p>Charles Noel 2022</p>
          </div>
        </div>
        <ButtonsBottom left={"/project-4"} />
      </motion.div>
    </main>
  );
};

export default Contact;
